import React from 'react'
import '../components/LogoCards.css'


function LogoCards(props) {
    return (
        <>
            <div className='overlay'>
                <h1 className='logo-card-header'>{props.header}</h1>
                <div className="logo-cards__wrapper">
                    {props.logoLinkData.map((friend) => {
                        return (
                            <div className="logo-row">
                                <a className="logo-cards__items" href={friend.link} target="_blank" rel="noopennernoreferrer">
                                    <img src={friend.logo} alt={friend.altText} className='logo-cards__img' />
                                </a>
                            </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default LogoCards
