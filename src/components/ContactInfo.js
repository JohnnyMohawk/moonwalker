import React from 'react'
import '../components/ContactInfo.css'
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"


export default function ContactInfo(props) {
  return (
    <div className='numNaddyWrap'>
      <div className='numNaddy'>
          <a className='heroLinks' href="https://www.google.com/maps/place/4101+W+Belmont+Ave,+Chicago,+IL+60641/@41.938798,-87.7320567,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcda9b203de1f:0xe1a3936949f6334!8m2!3d41.938798!4d-87.729868" target="_blank" rel="noopenner noreferrer">
              <FaMapMarkerAlt /> {props.address}
          </a>
          <a className='heroLinks' href="tel:17736287945" target="_blank" rel="noopenner noreferrer">
              <FaPhoneAlt /> {props.phone}
          </a>
      </div>
    </div>
  )
}
