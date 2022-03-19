import React, {useEffect} from 'react'
import HeroSection from '../components/HeroSection'
// import Quote from '../components/Quote'
import Cards from '../components/Cards.js'
import Background from '../components/Background'


function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Background />
            <HeroSection />
            {/* <Quote 
                quote="Moonwalker Cafe is the scratch kitchen every neighborhood deserves. - Chicago Reader " 
            /> */}
            <Cards />
        </>
    )
}

export default Home