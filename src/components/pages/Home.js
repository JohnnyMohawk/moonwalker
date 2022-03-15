import React, {useEffect} from 'react'
import '../../App.css'
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
            <Quote />
            <Cards />
        </>
    )
}

export default Home