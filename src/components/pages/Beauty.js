import React from 'react';
import ImageSlider from "../ImageSlider"
import { SliderData } from "../SliderData"
// import App from '../../App';
import "../pages/Beauty.css"

const Beauty = () => {
    return (
        <div className="beauty-container">
            <video src="/videos/ripples.mp4" autoPlay loop muted />
            <section className="contacts" id="projects-page">
                <h1>Beautiful Images</h1>
                <ImageSlider slides={SliderData}/>
            </section>
        </div>
    )
}

export default Beauty