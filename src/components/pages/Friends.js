import React, {useEffect} from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import LogoCards from '../LogoCards'
import Quote from '../Quote'
import Cards from './Cards'


function Friends () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="about-overlay">
            <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />
            {/* <Quote /> */}
            {/* <Cards /> */}
            <LogoCards />

        </div>
    )
}

export default Friends

