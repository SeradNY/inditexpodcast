import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEpisode } from '../../app/actions/podcastActions';
import { Link } from "react-router-dom";
import { xml2json } from 'xml-js';
import "./EpisodesList.css";
import diffHours from '../../app/utlis/diffHours';

const EpisodesList = ({ props, setLoading }) => {
    const [listF, setListF] = useState();
    var date = new Date();
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (window.localStorage[props.feedUrl] && diffHours(window.localStorage[`timestamp-${props.feedUrl}`], today) < 2) {
            createItems(JSON.parse(window.localStorage[props.feedUrl]))
        } else {
            fetch(props.feedUrl)
                .then(response => response.text())
                .then(data => {
                    const array = JSON.parse(xml2json(data)).elements[0].elements[0].elements.filter(pod => pod.name === "item");
                    window.localStorage[props.feedUrl] = JSON.stringify(array)
                    window.localStorage[`timestamp-${props.feedUrl}`] = today
                    createItems(array)
                });
        }
    }, [])

    const parseDate = (date) => {
        const D = new Date(date);
        return `${D.getDay()}/${D.getMonth()}/${D.getFullYear()}`;
    }

    const createItems = (array) => {
        var newArray = [];
        array.forEach(item => {
            const body = {
                title: item.elements.filter(title => title.name === "title")[0].elements[0].text || item.elements.filter(title => title.name === "title")[0].elements[0].cdata,
                duration: item.elements.filter(title => title.name === "itunes:duration").length > 0 && item.elements.filter(title => title.name === "itunes:duration")[0].elements[0].text,
                date: item.elements.filter(title => title.name === "pubDate").length > 0 && item.elements.filter(title => title.name === "pubDate")[0].elements[0].text,
                audio: item.elements.filter(title => title.name === "enclosure").length > 0 && item.elements.filter(title => title.name === "enclosure")[0].attributes,
                id: item.elements.filter(title => title.name === "guid").length > 0 && item.elements.filter(title => title.name === "guid")[0].elements[0].cdata,
                description: item.elements.filter(title => title.name === "description").length > 0 && (item.elements.filter(title => title.name === "description")[0].elements[0].cdata || item.elements.filter(title => title.name === "description")[0].elements[0].text),
            }
            newArray.push(body)
            setListF(newArray)
            setLoading(false)
        });
    }

    return (
        <>
            {<div className='EpisodesList'>
                {listF ? <>
                    <div className='episodesCount'>Episodes: {listF.length}</div>
                    <div className='episodesTable'>
                        <table >
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody >
                                {listF.map(pod =>
                                    <tr key={pod.title + pod.duration}>
                                        <td>{pod.audio ? <Link to={`episode/${pod.id}`} onClick={() => dispatch(saveEpisode(pod))}>{pod.title}</Link> : pod.title}</td>
                                        <td>{parseDate(pod.date)}</td>
                                        <td>{pod.duration}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </> : <div>Loading...</div>}
            </div>}
        </>
    )
}

export default EpisodesList