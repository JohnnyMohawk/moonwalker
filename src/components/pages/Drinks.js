import React, {useEffect} from 'react';
import Background from '../Background';
import DrinkMenu from '../DrinkMenu';
import { drinkData } from '../../Data/drink-data';
import AddOns from '../AddOns';

function Drinks() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <Background />
            <DrinkMenu 
                tagLine="PROUDLY BREWING DARK MATTER COFFEE" 
                menuData={drinkData} 
            />
            <AddOns menuData={drinkData} />
        
        </>
    )
}

export default Drinks