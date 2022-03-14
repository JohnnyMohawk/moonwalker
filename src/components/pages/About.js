import React, {useEffect} from 'react';
import '../pages/About.css'
import heartLottie from '../../animations/heartLottie.json'
import Lottie from 'react-lottie-player'

function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="about-wrap">
            <div className="about-overlay">
                <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />

                <div className="about-container">
                    <div className='storyWrap'>
                    <h1 className='about-header'>Our Story</h1>
                    <Lottie
                    className='heartimation'
                    loop
                    animationData={heartLottie}
                    play
                    style={{ width: 200, height: 200 }}
                    />
                </div>

                <p className='about-us'>When Arlene Luna moved back to Chicago in December 2020 she discovered that all of her old classmates 
                    from the now-defunct Cooking and Hospitality Institute of Chicago had left the life. “Everyone that 
                    I knew from back then is no longer in the business,” she says. “I came back and started looking up a 
                    few people, and they were all either retired and no longer cooking, selling products, or doing research 
                    and development.” Luna hadn’t. She’d spent the previous 15 years cooking in southern California in the 
                    country club, fine dining, and catering kitchens of Palm Springs, and later Long Beach. In June 2020 
                    she’d been clocking five hours a day on the 405, commuting to a private chef gig 30 miles away in Beverly 
                    Hills. The pandemic put a stop to that.
                </p>
                </div>
            </div>
        </div>
    )
}

export default About


