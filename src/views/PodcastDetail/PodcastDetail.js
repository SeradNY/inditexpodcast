import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePodcast } from '../../app/actions/podcastActions';
import usePDetails from '../../app/hooks/usePDetails';
import CardPodcast from '../../components/CardPodcast/CardPodcast';
import EpisodesList from '../../components/EpisodesList/EpisodesList';
import NavBar from '../../components/NavBar/NavBar';
import "./PodcastDetail.css";

const PodcastDetail = () => {
    let { podcastId } = useParams();
    const dispatch = useDispatch()
    const { data } = usePDetails(podcastId);
    const [podcast, setPodcast] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        data && setPodcast(JSON.parse(data.contents).results[0])
        data && dispatch(savePodcast(JSON.parse(data.contents).results[0]))
    }, [data, dispatch, podcastId])


    return (
        <div>
            <NavBar loading={loading} />
            {podcast && <>
                <div className='container'>
                    <CardPodcast props={podcast} />
                    <EpisodesList props={podcast} setLoading={setLoading} />
                </div>
            </>}
        </div >
    );
};

export default PodcastDetail;