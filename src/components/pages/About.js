import React, {useEffect} from 'react';
import Background from '../Background'
import LoveText from '../LoveText'
import TextPage from '../TextPage'
import { aboutText } from '../../Data/about-data'


function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (

        <>
            <Background />
            <TextPage text={aboutText} headerComponent={<LoveText/>} />
        </>
    )
}

export default About


