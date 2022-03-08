import React from 'react'
import './NavBar.css'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = ({cartItems}) => {

  return (
    <nav className='app_navbar'>
      <div className='app_menu'>
      <h2>
        <Link to='/main'>
        Menu  
        </Link>
      </h2>
      </div>
      <div className='app_cart'>
        <Link to='/cart'>
          <FaShoppingCart size={20}/>
        </Link>
        <span className='cart_number'>
            {cartItems.length === 0 ? "" : cartItems.length}  
          </span>
      </div>
    </nav>
  )
}

export default NavBar
