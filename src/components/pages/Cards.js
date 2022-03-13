import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/moonwalker5.webp" text="Our Daily Food Menu." path="/spiritual" />
                        <CardItem src="images/moonwalker6.jpeg" text="Our Drink Menu." path="/spiritual" />
                        <CardItem src="images/moonwalker7.jpeg" text="Saturday Supper Club & Pop Ups." path="/spiritual" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/la-chicago.jpeg" text="Our Story." path="/spiritual" />
                        <CardItem src="images/local-food.jpeg" text="Farmers, Suppliers & Friends." path="/spiritual" />
                        <CardItem src="images/exciting-news.jpeg" text="Moonwalker Cafe in the Media!" path="/spiritual" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
