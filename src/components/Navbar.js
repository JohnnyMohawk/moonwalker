import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'
import moongirl from '../../src/animations/moongirl.json'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

    // useEffect(() => {
    //     showButton()
    // }, [])

    // window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <Lottie
                    className='moonimation'
                    loop
                    animationData={moongirl}
                    play
                    style={{ width: 90, height: 90 }}
                    />
                        Moonwalker Cafe
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/drinks" className="nav-links" onClick={closeMobileMenu}>
                                Sips
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/food" className="nav-links" onClick={closeMobileMenu}>
                                Eats
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/friends" className="nav-links" onClick={closeMobileMenu}>
                                Friends
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/press" className="nav-links" onClick={closeMobileMenu}>
                                Press
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
