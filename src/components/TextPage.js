import React from 'react'
// import heartLottie from '../../animations/heartLottie.json'
// import Lottie from 'react-lottie-player'
import './TextPage.css'


export default function TextPage(props) {
    return (
        <div className="text-overlay">
            <div className="text-container">
                <div className='headCompWrap'>
                    {props.headerComponent}
                </div>
                <p className='pageText'>{props.text}</p>
            </div>
        </div>
    )
}
