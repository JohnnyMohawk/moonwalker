import React from 'react'
import '../App.css'
import './Background.css'
// import AnimatedTitle from './AnimatedTitle'
// import BizHours from './BizHours'
// import ContactInfo from './ContactInfo'

function Background() {
    return (
        <div className="hero-container">
            <div className="overlay">
                <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />
            </div>
        </div>
    )
}

export default Background
