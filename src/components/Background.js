import React from 'react'
import '../App.css'
import './Background.css'
// import AnimatedTitle from './AnimatedTitle'
// import BizHours from './BizHours'
// import ContactInfo from './ContactInfo'

function Background() {
    return (
        <div className="hero-bg-container">
            {/* <div className="overlay"> */}
                <img src='/images/med-tile.jpeg' alt='moonwalker cafe tile' className='hero-bg-image' />
            {/* </div> */}
        </div>
    )
}

export default Background
