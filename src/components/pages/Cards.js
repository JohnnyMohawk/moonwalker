import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>"Moonwalker Cafe is the scratch kitchen every neighborhood deserves"</h1>
            {/* <div>Moonwalker</div> 
            <div> 
                <span>Cafe is the scratch kitchen every neighborhood deserves</span>
            </div> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/yoga-mountains.jpeg" text="Blossom into your BEST self!" label="Spiritual" path="/spiritual" />
                        <CardItem src="images/rocks.jpeg" text="Follow your light. Live your truth." label="Spiritual" path="/spiritual" />
                        <CardItem src="images/chakras.jpeg" text="Explore sacred geometry" label="Spiritual" path="/spiritual" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/bonsai.jpeg" text="How to age like a bonsai tree." label="Health" path="/spiritual" />
                        <CardItem src="images/brushes.png" text="You are creative. Just be you." label="Creativity" path="/spiritual" />
                        <CardItem src="images/baby.jpeg" text="Daily Affirmations: For a good day" label="Gratitude" path="/spiritual" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
