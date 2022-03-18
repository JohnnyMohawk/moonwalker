import React, {useEffect} from 'react';
import "../pages/Press.css"

const Press = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="logo-cards__wrapper">
            <h1 className='friendsHeader'>Moonwalker in the Media!</h1>
            <div className="logo-row">
                <a className="logo-cards__items" href="https://chicagoreader.com/food-drink/moonwalker-cafe-is-the-scratch-kitchen-every-neighborhood-deserves/" target="_blank" rel="noopennernoreferrer">
                    <img src='/images/Chicago Reader Logo.png' alt='moonwalker counter' className='logo-cards__img' />
                </a> 
                <a className="logo-cards__items" href="https://www.chicagomag.com/chicago-magazine/december-2021/the-10-hottest-restaurants-in-chicago-right-now-10/" target="_blank" rel="noopennernoreferrer">  
                    <img src='/images/Chicago Magazine.png' alt='moonwalker counter' className='logo-cards__img' />
                </a>
            </div>
        </div>
    )
}

export default Press