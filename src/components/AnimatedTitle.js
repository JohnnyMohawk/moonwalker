import React from 'react'
import '../components/AnimatedTitle.css'

export default function AnimatedTitle(props) {
    return (
        <div className='aniTitleWrap'>
            <div class="animated-title">
                <div class="text-top">
                    <div>
                        <span>{props.title}</span>
                        <span className='top-animation'>{props.subTitle}</span>
                    </div>
                </div>
                <div class="text-bottom">
                    <div className='location'>{props.city} | &nbsp; <span className='hermosa'>{props.hood}</span></div>
                </div>
            </div>
        </div>
    )
}
