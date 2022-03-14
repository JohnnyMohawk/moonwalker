import React, {useEffect} from 'react';
// import App from '../../App';
import '../pages/Food.scss'

function Food() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="drink-container">
            <div className="menu-overlay">
                <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />

                <h3 className='brew'>Scratch Kitchen | Local Ingredients</h3>

                <div class="menu-container">
                    <h1 className='menu-header'>Food</h1>
                    <h3 className='menu-details'>All sandwiches served with chips or fries. Menu subject to change.</h3>
                    
                    <h3>
                        <span>Moonwalker Breakfast Sandwich</span>
                        <span className='menuPrice'>$9.50</span>
                    </h3>
                    <p>Brioche bun, fried egg, Catalpa Grove Farms sausage or bacon, cheddar, choice of aioli.</p>
                    <h3>
                        <span>Ham & Cheese Croissant</span>
                        <span className='menuPrice'>$7.50</span>
                    </h3>
                    <p>Croissant, Catalpa Grove Farms ham, fried egg, choice of cheese.</p>
                    <h3>
                        <span>Avocado Toast</span>
                        <span className='menuPrice'>$10.50</span>
                    </h3>
                    <p>Hewn bread, tomato, feta, pepitas, dukkah, arugula, lemon vinaigrette.</p>
                    <h3>
                        <span>Moonwalker Breakfast Burrito</span>
                        <span className='menuPrice'>$9.50</span>
                    </h3>
                    <p>Flour tortilla, two eggs, cheddar, potatoes, choice of bacon or sausage.</p>
                    <h3>
                        <span>The Basic Bagel Sandwich</span>
                        <span className='menuPrice'>$11.50</span>
                    </h3>
                    <p>Everything bagel, choice of cream cheese, sliced tomatoes, arugula, lemon vinaigrette.</p>
                    <h3>
                        <span>The Brad</span>
                        <span className='menuPrice'>$11.50</span>
                    </h3>
                    <p>Everything bagel, jalapeño cream cheese, roasted tomatoes, candied bacon.</p>
                    <h3>
                        <span>The Brunch</span>
                        <span className='menuPrice'>$11.50</span>
                    </h3>
                    <p>Everything bagel, lox cream cheese, tomato, red onion, capers, arugula, lemon vinaigrette.</p>
                    <h3>
                        <span>B.L.T.</span>
                        <span className='menuPrice'>$13.50</span>
                    </h3>
                    <p>You know what it is...</p>
                    <h3>
                        <span>Chicken Sandwich</span>
                        <span className='menuPrice'>$13.50</span>
                    </h3>
                    <p>Fried or herb roasted chicken, lettuce, tomato, mushrooms, white cheddar, carmelized onions, arugula, choice of aioli.</p>
                    <h3>
                        <span>Ribeye Steak Sandwich</span>
                        <span className='menuPrice'>$13.50</span>
                    </h3>
                    <p>Hewn baguette, mushrooms, white cheddar, carmelized onions, arugula. (Veggie version available)</p>
                </div>
            </div>
        </div>
    )
}

export default Food