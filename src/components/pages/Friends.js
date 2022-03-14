import React, {useEffect} from 'react';
import CardItem from './CardItem'
import '../pages/Friends.css'

function Friends() {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="about-overlay">
        <div className="friends-cards">
            <div className="friends-cards__container">
            <img src='/images/med-tile.jpeg' alt='moonwalker counter' className='hero-image' />
                <div className="friends-cards__wrapper">
                    <h1 className='friends-header'>Proudly Serving</h1>
                    <ul className="friends-cards__items">
                        <CardItem src="images/dark-matter.webp" text="Dark Matter Coffee." path="/food" />
                        <CardItem src="images/moonwalker6.jpeg" text="Our Drink Menu." path="/drinks" />
                        <CardItem src="images/moonwalker7.jpeg" text="Specials, Supper Club & Pop Ups." path="/specials" />
                    </ul>
                    <ul className="friends-cards__items">
                        <CardItem src="images/la-chicago.jpeg" text="Our Story." path="/about" />
                        <CardItem src="images/local-food.jpeg" text="Farmers, Suppliers & Friends." path="/friends" />
                        <CardItem src="images/exciting-news.jpeg" text="Moonwalker Cafe in the Media!" path="/press" />
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Friends


