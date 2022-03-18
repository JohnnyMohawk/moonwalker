import React from 'react'
import {Link} from 'react-router-dom'

function LogoCardItem(props) {
    return (
        <div className='overlay'>
            <li className="logo-cards__item">

                    <figure className="logo-cards__item__text">
                        <img src={props.src} alt="Peaceful" className="logo-cards__item__img"/>
                    </figure>

                {/* <Link className="logo-cards__item__link" to={props.path}>
                    <figure className="logo-cards__item__pic-wrap">
                        <img src={props.src} alt="Peaceful" className="logo-cards__item__img"/>
                    </figure>
                    <div className="logo-cards__item__info">
                        <h5 className="logo-cards__item__text">{props.text}</h5>
                    </div>
                </Link> */}
            </li>
        </div>
    )
}

export default LogoCardItem
