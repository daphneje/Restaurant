import React from 'react'
import './NavBar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavBar = () => {
  return (
    <nav className='app_navbar'>
      <div className='app_menu'>
      Menu
      </div>
      <div className='app_cart'>
        <AiOutlineShoppingCart/>
      </div>
    </nav>
  )
}

export default NavBar
