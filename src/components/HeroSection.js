import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/flowers.mp4" autoPlay loop muted />
            
            <h1>Roaring Grace</h1>
            <p>Before we roar...</p>
            <p>we breathe</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Begin</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Wander</Button>
            </div>
        </div>
    )
}

export default HeroSection
