import React from 'react';
import "./CardPodcast.css";

const CardPodcast = ({ props }) => {
    return (
        <div className='CardPodcast'>
            <img alt={props.artistName} src={props.artworkUrl600} />
            <div className='desc'>
                <div className='text'>{props.artistName}</div>
                <div className='text'>Author: {props.collectionName}</div>
            </div>
            <div className='desc'>
                <div className='text'>{props.artistName}</div>
            </div>
        </div>
    )
}

export default CardPodcast