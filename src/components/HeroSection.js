import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="overlay">
                {/* <video src="/videos/flowers.mp4" autoPlay loop muted /> */}
                <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />
                <div className='aniTitleWrap'>
                    <div class="animated-title">
                        <div class="text-top">
                            <div>
                                <span>Moonwalker</span>
                                <span className='top-animation'>Cafe</span>
                            </div>
                        </div>
                        <div class="text-bottom">
                            <div className='location'>Chicago | &nbsp; <span className='hermosa'>Hermosa</span></div>
                        </div>
                    </div>
                </div>
                    <h4><a href="https://www.google.com/maps/place/4101+W+Belmont+Ave,+Chicago,+IL+60641/@41.938798,-87.7320567,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcda9b203de1f:0xe1a3936949f6334!8m2!3d41.938798!4d-87.729868" target="_blank" rel="noopennernoreferrer">
                        4101 W Belmont Ave, Chicago, IL 60641
                    </a></h4>

                {/* <h1>Moonwalker Cafe</h1> */}
                {/* <p>Hermosa | Chicago</p> */}
                {/* <p>we breathe</p> */}
                {/* <div className="hero-btns">
                    <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Begin</Button>
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Wander</Button>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection
