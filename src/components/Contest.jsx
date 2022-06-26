import React from 'react';
import imagemap from '../api/imagemap';

function Contest(props) {

    var imageURL = imagemap.get(props.resource);

    //Display a box element that contains the contest details 
    return(
            <a className={'contest-box contest-link btn btn-light '} href={props.href} target={'_blank'} rel={'noreferrer'}>
                <div className={'left'}>
                    <span><strong>{props.event}</strong></span>
                    <span>Start date: {props.date[1]}/{props.date[0]}/{props.date[2]}</span>
                    <span>Start time: {props.time[1]}</span>
                    <span>Duration: {props.duration}</span>
                </div>

                <div className={'right'}>
                    <img className='logo' alt={props.resource} src={imageURL}></img>
                </div>
            </a>
    );

}

export default Contest;
