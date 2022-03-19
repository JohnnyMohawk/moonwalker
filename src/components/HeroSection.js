import React from 'react'
// import '../App.css'
import './HeroSection.css'
import AnimatedTitle from './AnimatedTitle'
import BizHours from './BizHours'
import ContactInfo from './ContactInfo'


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-overlay">
                <div className='home-fade'>
                    <AnimatedTitle title="Moonwalker" subTitle="Cafe" city="Chicago" hood="Avondale" />
                    <BizHours mon="Closed" tues="7 AM to 4 PM" weds="7 AM to 4 PM" thurs="7 AM to 4 PM" fri="7 AM to 4 PM" sat="8 AM to 4 PM" sun="8 AM to 2 PM" />
                    <ContactInfo phone="(773) 628-7945" address="4101 W Belmont Ave, CHI, IL 60641" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
