import React, {useEffect} from 'react';
import Background from '../components/Background'
import LoveText from '../components/LoveText'
import TextPage from '../components/TextPage'
import { aboutText } from '../Data/about-data'


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


