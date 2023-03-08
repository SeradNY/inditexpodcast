import React from 'react';
import "./PodcasItem.css";

const PodcasItem = ({ props }) => {
    return (
        <div className='podcastitem'>
            <img alt={props['im:name'].label} src={props['im:image'][2].label} />
            <div className='desc'>
                <div className='text'>{props['im:name'].label}</div>
                <div className='text'>Author: {props['im:artist'].label}</div>
            </div>
        </div>
    )
}

export default PodcasItem