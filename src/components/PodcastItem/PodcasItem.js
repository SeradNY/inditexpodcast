import React from 'react';
import { useNavigate } from "react-router-dom";
import "./PodcasItem.css";

const PodcasItem = ({ props }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/podcast/${id}`);
    }
    return (
        <div className='podcastitem' onClick={() => handleClick(props.id.attributes['im:id'])}>
            <img alt={props['im:name'].label} src={props['im:image'][2].label} />
            <div className='desc'>
                <div className='text'>{props['im:name'].label}</div>
                <div className='text'>Author: {props['im:artist'].label}</div>
            </div>
        </div>
    )
}

export default PodcasItem