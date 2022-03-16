import React from 'react';
import './DrinkMenu.scss'

function DrinkMenu(props) {

    return (
        <div className="drink-container">
            <div className="menu-overlay">

                <div class="drink-menu-container">
                    <h1 className='menu-header'>Coffee</h1>
                    <div class="group-header">
                        <span>12 oz</span>
                        <span>16 oz</span>
                    </div>
                    
                    {props.menuData.coffee.map((menuItem) => {
                    return (

                    <h3>
                        <span>{menuItem.item}</span>
                        <span>{menuItem.twelvePrice}</span>
                        <span>{menuItem.sixteenPrice}</span>
                    </h3>

                        )
                    })}

                </div>

                <div class="drink-menu-container">
                    <h1 className='menu-header'>Lattes</h1>
                    <div class="group-header">
                        <span>12 oz</span>
                        <span>16 oz</span>
                    </div>
                    
                    {props.menuData.lattes.map((menuItem) => {
                    return (

                    <h3>
                        <span>{menuItem.item}</span>
                        <span>{menuItem.twelvePrice}</span>
                        <span>{menuItem.sixteenPrice}</span>
                    </h3>

                        )
                    })}

                </div>

                <div class="drink-menu-container">
                    <h1 className='menu-header'>Specialty Lattes</h1>
                    <div class="group-header">
                        <span>12 oz</span>
                        <span>16 oz</span>
                    </div>
                    
                    {props.menuData.specialLattes.map((menuItem) => {
                    return (

                    <h3>
                        <span>{menuItem.item}</span>
                        <span>{menuItem.twelvePrice}</span>
                        <span>{menuItem.sixteenPrice}</span>
                    </h3>

                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default DrinkMenu