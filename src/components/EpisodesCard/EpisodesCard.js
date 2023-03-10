import React from 'react';
import "./EpisodesCard.css";

const EpisodesCard = ({ props }) => {
    return props &&
        <div className='EpisodesCard'>
            <div>
                <div className='tilte'>{props.title}</div>
                <div className='desc' dangerouslySetInnerHTML={{ __html: props.description.split('</p>')[0] }}></div>
            </div>
            <audio controls type={props.audio.type}>
                <source src={props.audio.url} />
                <em>Sorry, your browser doesn't support HTML5 audio.</em>
            </audio>
        </div >
};

export default EpisodesCard;