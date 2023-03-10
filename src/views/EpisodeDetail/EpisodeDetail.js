import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardPodcast from '../../components/CardPodcast/CardPodcast';
import EpisodesCard from '../../components/EpisodesCard/EpisodesCard';
import NavBar from '../../components/NavBar/NavBar';
import "./EpisodeDetail.css";


const EpisodeDetail = () => {
    const podcast = useSelector((store) => store.podcastReducer.podcast)
    const episode = useSelector((store) => store.podcastReducer.episode)

    return (
        <div>
            <NavBar/>
            {podcast && <>
                <div className='container'>
                    <CardPodcast props={podcast} />
                    <EpisodesCard props={episode} />
                </div>
            </>}
        </div >
    );
};

export default EpisodeDetail;