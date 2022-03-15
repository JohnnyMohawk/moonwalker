import React, {useEffect} from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Quote from '../Quote'
import Cards from '../Cards.js'

import Menu from '../Menu'
import { MenuData } from '../../Data/menu-data'
import './Food.scss'

function Home () {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <HeroSection />
            <Quote />
            <Cards />
            {/* <Menu 
                menuTitle="Food" 
                menuInfo="All sandwiches served with chips or fries. Menu subject to change."  
                menuData={MenuData} 
            /> */}
        </>
    )
}

export default Home