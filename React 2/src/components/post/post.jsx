import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Post(props) {
    return (
        <>
            <div className='main'>
                <img src={props.imgSrc} alt="img not found" />
                <p>
                    {props.divpara}
                </p>
                <div className='icon-class'>
                    <div> <FontAwesomeIcon icon={faThumbsUp} /> Like </div>
                    <div><FontAwesomeIcon icon={faComment} /> Comment </div>
                    <div><FontAwesomeIcon icon={faShare} /> Share </div>
                </div>
            </div>
        </>
    )
}
