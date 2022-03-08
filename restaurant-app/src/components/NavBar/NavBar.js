import React from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='app_navbar'>
      <div className='app_menu'>
      <h2>
        <Link to='/'>
        Menu  
        </Link>
      </h2>
      </div>
      <div className='app_cart'>
        <Link to='/cart'>
          <AiOutlineShoppingCart/>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
