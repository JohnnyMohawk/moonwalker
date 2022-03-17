import React, {useEffect} from 'react'
// import '../../App.css'
import HeroSection from '../HeroSection'
import Quote from '../Quote'
import Cards from '../Cards.js'



function Home () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <HeroSection />
            <Quote 
                quote="Moonwalker Cafe is the scratch kitchen every neighborhood deserves. - Chicago Reader " 
            />
            <Cards />
        </>
    )
}

export default Home