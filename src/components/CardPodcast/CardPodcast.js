import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./CardPodcast.css";

const CardPodcast = ({ props }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/podcast/${id}`);
    }
    return (
        <div className='CardPodcast'>
            <div className='desc' onClick={() => handleClick(props.collectionId)}>
                <img alt={props.artistName} src={props.artworkUrl600} />
            </div>
            <div className='desc'>
                <div className='text artist'>
                    <Link to={`/podcast/${props.collectionId}`}>{props.artistName}</Link>
                </div>
                <div className='text'>by {props.collectionName}</div>
            </div>
            <div className='desc'>
                <div className='text descrip'>Description:</div>
                <div className='text'>{props.artistName}</div>
            </div>
        </div>
    )
}

export default CardPodcast