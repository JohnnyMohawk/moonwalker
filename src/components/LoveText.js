import React from 'react';
import '../components/LoveText.css'
import heartLottie from '../animations/heartLottie.json'
import Lottie from 'react-lottie-player'

export default function LoveText() {
    return (
        <div className='loveTextWrap'>
            <div className='storyWrap'>
                <h1 className='love-text-header'>Our Story</h1>
                <Lottie
                    className='heartimation'
                    loop
                    animationData={heartLottie}
                    play
                    style={{ width: 200, height: 200 }}
                />
            </div>
        </div>
    )
}
