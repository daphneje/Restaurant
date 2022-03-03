import React from 'react'
import './Main.css'
import {foodCategory} from '../../constants/foodCategory'

const Main = () => {
  return (
    <div className='app_category_container'>
    
      {foodCategory.map((t)=> (
        <div className='app_category_items'>
          <img className='app_category_image' src={t.image} alt=''/>
          <p className='p_category_title'>{t.title}</p>
        </div>
      ) )}
    </div>
  )
}

export default Main
