import React, {useEffect} from 'react';
import ImageSlider from "../ImageSlider"
import { SliderData } from "../SliderData"
// import App from '../../App';
import "../pages/Press.css"

const Press = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="news-wrap">
            <div className="news-overlay">
                <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />

                <div className="news-container">
                <h1 className='news-header'>Moonwalker Cafe in the Media</h1>
                    {/* <div className='storyWrap'>
                    <h1 className='news-header'>Our Story</h1>
                    <Lottie
                    className='heartimation'
                    loop
                    animationData={heartLottie}
                    play
                    style={{ width: 200, height: 200 }}
                    />
                </div> */}

                <div className='news'>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Press