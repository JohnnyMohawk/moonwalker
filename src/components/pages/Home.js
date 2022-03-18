import React, {useEffect} from 'react'
import HeroSection from '../HeroSection'
import Quote from '../Quote'
import Cards from '../Cards.js'
import Background from '../Background'


function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Background />
            <HeroSection />
            <Quote 
                quote="Moonwalker Cafe is the scratch kitchen every neighborhood deserves. - Chicago Reader " 
            />
            <Cards />
        </>
    )
}

export default Home