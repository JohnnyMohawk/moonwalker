import React, {useEffect} from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Quote from '../Quote'
import Cards from '../Cards.js'


import Menu from '../Menu'
import { MenuData } from '../../Data/menu-data'
import './Food.scss'
import DrinkMenu from '../DrinkMenu'
import { drinkData } from '../../Data/drink-data'
import AddOns from '../AddOns'
import Background from '../Background'




function Home () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>

            {/* <Background /> */}

            <HeroSection />
            <Quote 
                quote="Moonwalker Cafe is the scratch kitchen every neighborhood deserves. - Chicago Reader " 
            />
            <Cards />
            {/* <Menu 
                menuTitle="Food" 
                menuInfo="All sandwiches served with chips or fries. Menu subject to change."  
                menuData={MenuData} 
            />

            <DrinkMenu drinkType="Coffee" menuData={drinkData} />

            <AddOns menuData={drinkData} /> */}

        </>
    )
}

export default Home