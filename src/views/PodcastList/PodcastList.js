import React, { useState, useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux'
import PodcasItem from '../../components/PodcastItem/PodcasItem';
import { result } from "../../app/mock";
import "./PodcastList.css";

const PodcastList = () => {
    const [filter, setFilter] = useState();
    const [items, setitems] = useState(result.feed.entry);

    const { store } = useContext(ReactReduxContext);

    // console.log(store.getState().counterReducer.count, result)

    useEffect(() => {
        if (filter && filter.length > 2) {
            setitems(result.feed.entry.filter(podcast => podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())))
        } else {
            setitems(result.feed.entry)

        }
    }, [filter]);

    return <div>
        <div className='filter'>
            <span className={`numItems ${filter.length > 2 ? "green" : ""}`}>{items.length}</span>
            <input type="text" className='filtertext' onChange={(evt) => setFilter(evt.target.value)} />
        </div>
        <div className='podcastContainer'>
            {items.map(podcast => <PodcasItem key={`pod-${podcast.id.attributes['im:id']}`} props={podcast} />)}
        </div>
    </div >;
};

export default PodcastList;