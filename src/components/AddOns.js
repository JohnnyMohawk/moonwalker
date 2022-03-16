import React from 'react';
import './DrinkMenu.css'

function AddOns(props) {

    return (
        <div className="drink-menu-overlay">
            <div class="drink-menu-container">
                <h1 className='drink-menu-header'>Add Ons</h1>
            {props.menuData.addOns.map((menuItem) => {
                return (
                    <div className='drink-price-wrap'>
                        <h3>{menuItem.item}</h3>
                        <h3 className='addOn'>{menuItem.price}</h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default AddOns