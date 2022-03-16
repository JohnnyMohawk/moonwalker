import React from 'react';
import './DrinkMenu.scss'

function AddOns(props) {

    return (
        <div className="drink-container">
            <div className="menu-overlay">
                <div class="drink-menu-container">
                    <h1 className='menu-header'>Add Ons</h1>
                {props.menuData.addOns.map((menuItem) => {
                    return (
                        <h3>
                            <span>{menuItem.item}</span>
                            <span className='addOn'>{menuItem.price}</span>
                        </h3>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default AddOns