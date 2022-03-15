import React, {useEffect} from 'react'
import LogoCards from '../LogoCards'



function Friends () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="about-overlay">
            <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />
            <LogoCards />

        </div>
    )
}

export default Friends

