import React, {useEffect} from 'react';
import Background from '../Background';
import DrinkMenu from '../DrinkMenu';
// import App from '../../App';
// import '../pages/Drinks.scss'
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





        // <div className="drink-container">
        //     <div className="menu-overlay">
        //         <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />

        //         <h3 className='brew'>PROUDLY BREWING DARK MATTER COFFEE</h3>

        //         <div class="drink-menu-container">
        //             <h1 className='menu-header'>Coffee</h1>
        //             <div class="group-header">
        //                 <span>12 oz</span>
        //                 <span>16 oz</span>
        //             </div>
                    
        //             <h3>
        //                 <span>Drip</span>
        //                 <span>$2.50</span>
        //                 <span>$3.00</span>
        //             </h3>
        //             <h3>
        //                 <span>Iced</span>
        //                 <span>$3.75</span>
        //                 <span>$4.50</span>
        //             </h3>
        //             <h3>
        //                 <span>Cold Brew</span>
        //                 <span>$3.95</span>
        //                 <span>$4.95</span>
        //             </h3>
        //             <h3>
        //                 <span>Americano</span>
        //                 <span>$3.25</span>
        //                 <span>$3.95</span>
        //             </h3>
        //         </div>

        //         <div class="drink-menu-container">
        //             <h1 className='menu-header'>Lattes</h1>
        //             <div class="group-header">
        //                 <span>12 oz</span>
        //                 <span>16 oz</span>
        //             </div>
                    
        //             <h3>
        //                 <span>Caramel</span>
        //                 <span>$4.75</span>
        //                 <span>$5.25</span>
        //             </h3>
        //             <h3>
        //                 <span>Hazelnut</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Matcha</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Snickerdoodle</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Vanilla</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Sugar Free Vanilla</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Mocha</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Chai</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //         </div>

        //         <div class="drink-menu-container">
        //             <h1 className='menu-header'>Specialty Lattes</h1>
        //             <div class="group-header">
        //                 <span>12 oz</span>
        //                 <span>16 oz</span>
        //             </div>
                    
        //             <h3>
        //                 <span>Honey Vanilla Almond</span>
        //                 <span>$5.75</span>
        //                 <span>$6.50</span>
        //             </h3>
        //             <h3>
        //                 <span>Almond Joyous</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //             <h3>
        //                 <span>Hazelnut Mocha</span>
        //                 <span>*</span>
        //                 <span>*</span>
        //             </h3>
        //         </div>

        //         <div class="drink-menu-container">
        //             <h1 className='menu-header'>Add Ons</h1>
                    
        //             <h3>
        //                 <span>Extra Shot</span>
        //                 <span className='addOn'>$1.00</span>
        //             </h3>
        //             <h3>
        //                 <span>Extra Syrup</span>
        //                 <span className='addOn'>¢.50</span>
        //             </h3>
        //             <h3>
        //                 <span>Non-Dairy Milk</span>
        //                 <span className='addOn'>¢.75</span>
        //             </h3>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Drinks