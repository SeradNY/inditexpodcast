import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePDetails from '../../app/hooks/usePDetails';
import CardPodcast from '../../components/CardPodcast/CardPodcast';
import EpisodesList from '../../components/EpisodesList/EpisodesList';
import NavBar from '../../components/NavBar/NavBar';
import "./PodcastDetail.css";


const PodcastDetail = () => {
    let { podcastId } = useParams();
    const { data, loading, error } = usePDetails(podcastId);
    const [podcast, setPodcast] = useState();

    useEffect(() => {
        data && setPodcast(JSON.parse(data.contents).results[0])
        podcast && console.log(podcast)
    }, [data, podcastId])
    return (
        <div>
            <NavBar />
            {podcast && <>
                <CardPodcast props={podcast} />
                <EpisodesList props={podcast} />
            </>}
        </div >
    );
};

export default PodcastDetail;