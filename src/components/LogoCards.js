import React from 'react'
import LogoCardItem from './LogoCardItem'
import '../components/LogoCards.css'


function LogoCards() {
    return (
                <div className="logo-cards__wrapper">
                    <h1 className='friendsHeader'>Proudly Serving</h1>
                    <div className="logo-row">
                        <a className="logo-cards__items" href="https://www.darkmattercoffee.com/" target="_blank" rel="noopennernoreferrer">
                            <img src='/images/dark-matter.png' alt='moonwalker counter' className='logo-cards__img' />
                        </a> 
                        <a className="logo-cards__items" href="https://www.doritedonuts.com/" target="_blank" rel="noopennernoreferrer">  
                            <img src='/images/do-rite.png' alt='moonwalker counter' className='logo-cards__img' />
                        </a>
                    </div>
                    <div className="logo-row">
                        <a className="logo-cards__items" href="https://www.hewnbread.com/" target="_blank" rel="noopennernoreferrer">
                            <img src='/images/hewn-logo.png' alt='moonwalker counter' className='logo-cards__img' />
                        </a>
                        <a className="logo-cards__items" href="catalpagrovefarm.com" target="_blank" rel="noopennernoreferrer">
                            <img src='/images/CatalpaGroveFarm.jpeg' alt='moonwalker counter' className='logo-cards__img' />
                        </a>
                    </div>
                    <div className="logo-row">
                        <a className="logo-cards__items" href="https://www.volitiontea.com/" target="_blank" rel="noopennernoreferrer">
                            <img src='/images/volition.png' alt='moonwalker counter' className='logo-cards__img' />
                        </a>
                        {/* <a className="logo-cards__items" href="catalpagrovefarm.com" target="_blank" rel="noopennernoreferrer">
                            <img src='/images/CatalpaGroveFarm.jpeg' alt='moonwalker counter' className='logo-cards__img' />
                        </a> */}
                    </div>
                </div>
    )
}

export default LogoCards
