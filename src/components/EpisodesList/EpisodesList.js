import React, { useEffect, useState } from 'react';
import { xml2json } from 'xml-js';
import "./EpisodesList.css";

const EpisodesList = ({ props }) => {
    const [list, setList] = useState();
    const [listF, setListF] = useState([]);
    fetch(props.feedUrl)
        .then(response => response.text())
        .then(data => setList(xml2json(data)));

    useEffect(() => {
        if (list) {
            const array = JSON.parse(list).elements[0].elements[0].elements.filter(pod => pod.name === "item");
            var newArray = [];
            array.forEach(item => {
                const body = {
                    title: item.elements.filter(title => title.name === "title")[0].elements[0].text,
                    duration: item.elements.filter(title => title.name === "itunes:duration")[0].elements[0].text,
                    date: item.elements.filter(title => title.name === "pubDate")[0].elements[0].text,
                    audio: item.elements.filter(title => title.name === "enclosure")[0].attributes,
                }
                newArray.push(body)
                setListF(newArray)
            });
        }
    }, [list])

    return (
        <>
            {<div className='EpisodesList'>
                {listF && listF.map(pod => <div key={pod.title}>{pod.title}</div>)}
            </div>}
        </>
    )
}

export default EpisodesList