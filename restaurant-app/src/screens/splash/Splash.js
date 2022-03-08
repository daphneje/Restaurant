import React from 'react'
import logo from '../../assets/SPICY.png'
import './Splash.css'
import { Link } from 'react-router-dom'

const Splash = () => {
  return (
    <div className='app_splash_container'>
      <div className='logo'>
        <img src={logo} alt='Spicy Chilli'/>
      </div>
      <div className='app_tableno'>
      Table: 18
      </div>
      <div className='app_splash_button'>
      <Link to='/main'>
        ORDER NOW
      </Link>
      </div>
    </div>
  )
}

export default Splash
