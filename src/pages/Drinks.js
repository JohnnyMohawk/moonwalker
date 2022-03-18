import React, {useEffect} from 'react';
import Background from '../components/Background';
import DrinkMenu from '../components/DrinkMenu';
import { drinkData } from '../Data/drink-data';
import AddOns from '../components/AddOns';


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