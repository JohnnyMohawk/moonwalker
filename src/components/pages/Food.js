import React, {useEffect} from 'react';
import Menu from '../Menu';
import { MenuData } from '../../Data/menu-data';
import Background from '../Background';

function Food() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (

        <>
            <Background />
            <Menu 
                tagLine="Scratch Kitchen | Local Ingredients" 
                menuTitle="Food" 
                menuInfo="All sandwiches served with chips or fries. Menu subject to change." 
                menuData={MenuData} 
            />
        </>

    )
}

export default Food