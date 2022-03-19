import React from 'react'
import Lottie from 'react-lottie-player'
import comingSoon from '../animations/comingSoon.json'


export default function ComingSoon() {
  return (
    <>
        <div className='overlay'>
            <div style={{marginTop: "-5em"}} className="coming-soon-animation">
            <Lottie
                    loop
                    animationData={comingSoon}
                    play
                    style={{ width: 700, height: 700 }}
                />
            </div>
        </div>
    </>
  )
}
