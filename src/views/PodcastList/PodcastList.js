import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PodcasItem from '../../components/PodcastItem/PodcasItem';
import usePodcast from '../../app/hooks/usePodcast';
import "./PodcastList.css";

const PodcastList = () => {
    const [filter, setFilter] = useState([]);
    const [items, setitems] = useState([]);
    const [itemsFiltered, setitemsFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data } = usePodcast();
    
    useEffect(() => {
        data && setitems(data.feed.entry)
        data && setLoading(false)
    }, [data])

    useEffect(() => {
        if (filter && filter.length > 2) {
            setitemsFiltered(
                items.filter(podcast =>
                (podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase()) ||
                    podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase()))
                )
            )
        } else {
            setitemsFiltered([])
        }
    }, [filter, items]);

    return <div>
        <NavBar loading={loading} />
        {items && <>
            <div className='filter'>
                <span className={`numItems ${filter.length > 2 ? "green" : ""}`}>
                    {itemsFiltered.length !== 0 ? itemsFiltered.length : items.length}
                </span>
                <input type="text" className='filtertext' onChange={(evt) => setFilter(evt.target.value)} />
            </div>
            <div className='podcastContainer'>
                {filter.length > 2 ? itemsFiltered.map(podcast => <PodcasItem key={`pod-${podcast.id.attributes['im:id']}`} props={podcast} />) :
                    items.map(podcast => <PodcasItem key={`pod-${podcast.id.attributes['im:id']}`} props={podcast} />)}
            </div>
        </>}
    </div >;
};

export default PodcastList;