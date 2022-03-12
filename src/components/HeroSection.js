import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="overlay">
                {/* <video src="/videos/flowers.mp4" autoPlay loop muted /> */}
                <img src='/images/med-tile.webp' alt='moonwalker counter' className='hero-image' />

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
