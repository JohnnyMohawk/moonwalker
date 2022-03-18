import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to the Moonwalker Newsletter for updates and promotions!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Moonwalker Cafe
                        </Link>
                    </div>
                    <small className="website-rights">Moonwalker Cafe © {new Date().getFullYear()}</small>
                    <div className="social-icons">
                        <a className="social-icon-link instagram" href="https://www.instagram.com/moonwalkercafe/" target="_blank" rel="noopennernoreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                        <a className="social-icon-link facebook" href="https://www.facebook.com/moonwalkercafe/" target="_blank" rel="noopennernoreferrer">
                            <i className="fab fa-facebook" />
                        </a>
                        <a className="social-icon-link twitter" href="https://twitter.com" target="_blank" rel="noopennernoreferrer">
                            <i className="fab fa-twitter" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
