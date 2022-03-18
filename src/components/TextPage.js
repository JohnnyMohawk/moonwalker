import React from 'react'
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
