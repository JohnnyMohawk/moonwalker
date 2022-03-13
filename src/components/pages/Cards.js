import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/moonwalker5.webp" text="Our Daily Food Menu." path="/food" />
                        <CardItem src="images/moonwalker6.jpeg" text="Our Drink Menu." path="/drinks" />
                        <CardItem src="images/moonwalker7.jpeg" text="Specials, Supper Club & Pop Ups." path="/specials" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/la-chicago.jpeg" text="Our Story." path="/about" />
                        <CardItem src="images/local-food.jpeg" text="Farmers, Suppliers & Friends." path="/friends" />
                        <CardItem src="images/exciting-news.jpeg" text="Moonwalker Cafe in the Media!" path="/press" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
