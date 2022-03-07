import React from 'react'
import './MenuItems.css'
import { useParams } from 'react-router-dom'
import {foodItem} from '../../constants'
// import { useState } from 'react'

const MenuItems = (data, addToCart) => {
  
  const { id } = useParams();
  const listMenu = foodItem.filter(t => t.category === id)
  
 
  return (
    <div className='app_category_container'>

      {listMenu.map((t)=> (
          <div className='app_category_items'>
          <img className='app_category_image' src={t.image} alt=''/>
          <p className='p_category_title'>{t.title}</p>
          {/* <p className='p_category_description'>{t.description}</p> */}
        </div>
        
      ) )}
    </div>
  )
}

export default MenuItems
