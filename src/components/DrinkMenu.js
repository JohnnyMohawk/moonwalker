import React from 'react';
import './DrinkMenu.css'

function DrinkMenu(props) {

    return (
        <div className="drink-menu-overlay">

            <h3 className='tag-line'>{props.tagLine}</h3>
            <div class="drink-menu-container">
                <h1 className='drink-menu-header'>Coffee</h1>
                <div class="drink-sizes">
                    <h3 className='drink-size-sm'>12 oz</h3>
                    <h3 className='drink-size-lg'>16 oz</h3>
                </div>
                
                {props.menuData.coffee.map((menuItem) => {
                return (
                <div className='drink-menu-content-wrap'>
                    <h3 className='drink-menu-item'>{menuItem.item}</h3>
                    <div className='drink-item-price-wrap'>
                        <h3 className='drink-menu-price-sm'>{menuItem.twelvePrice}</h3>
                        <h3 className='drink-menu-price'>{menuItem.sixteenPrice}</h3>
                    </div>
                </div>
                    )
                })}

            </div>

            <div class="drink-menu-container">
                <h1 className='drink-menu-header'>Lattes</h1>
                <div class="drink-sizes">
                    <h3 className='drink-size-sm'>12 oz</h3>
                    <h3 className='drink-size-lg'>16 oz</h3>
                </div>
                
                {props.menuData.lattes.map((menuItem) => {
                return (
                <div className='drink-menu-content-wrap'>
                    <h3 className='drink-menu-item'>{menuItem.item}</h3>
                    <div className='drink-item-price-wrap'>
                        <h3 className='drink-menu-price-sm'>{menuItem.twelvePrice}</h3>
                        <h3 className='drink-menu-price'>{menuItem.sixteenPrice}</h3>
                    </div>
                </div>
                    )
                })}

            </div>

            <div class="drink-menu-container">
                <h1 className='drink-menu-header'>Specialty Lattes</h1>
                <div class="drink-sizes">
                    <h3 className='drink-size-sm'>12 oz</h3>
                    <h3 className='drink-size-lg'>16 oz</h3>
                </div>
                
                {props.menuData.specialLattes.map((menuItem) => {
                return (
                <div className='drink-menu-content-wrap'>
                    <h3 className='drink-menu-item'>{menuItem.item}</h3>
                    <div className='drink-item-price-wrap'>
                        <h3 className='drink-menu-price-sm'>{menuItem.twelvePrice}</h3>
                        <h3 className='drink-menu-price'>{menuItem.sixteenPrice}</h3>
                    </div>
                </div>
                    )
                })}

            </div>


        </div>
    )
}

export default DrinkMenu