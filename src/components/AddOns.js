import React from 'react';
import './DrinkMenu.css'

function AddOns(props) {

    return (
        <div className="drink-menu-overlay">
            <div class="drink-add-on-container">
                <h1 className='drink-menu-header'>Add Ons</h1>
                {props.menuData.addOns.map((menuItem) => {
                    return (
                        <div className='drink-menu-content-wrap'>
                            <h3 className='drink-menu-item'>{menuItem.item}</h3>
                            <div className='drink-add-on-price-wrap'>
                                <h3 className='drink-add-on-price'>{menuItem.price}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AddOns