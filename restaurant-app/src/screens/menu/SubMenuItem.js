import React from 'react'
import './MenuItems.css'
import { useParams } from 'react-router-dom'
import {foodItem} from '../../constants'
// import { useState } from 'react'

const SubMenuItems = () => {
  
  const { category} = useParams();
  const sublistMenu = foodItem.filter(t => t.subCategory === category )
  
 
  return (
    <div className='app_category_container'>

      {sublistMenu.map((t)=> (
          <div className='app_category_items'>
          <img className='app_category_image' src={t.image} alt=''/>
          <p className='p_category_title'>{t.title}</p>
          {/* <p className='p_category_description'>{t.description}</p> */}
        </div>
        
      ) )}
    </div>
  )
}

export default SubMenuItems
