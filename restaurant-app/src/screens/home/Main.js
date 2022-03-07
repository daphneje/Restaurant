import React from 'react'
import './Main.css'
import {foodCategory} from '../../constants'
import { Link } from 'react-router-dom'

// import { ItemCategory } from '../../models'


const Main = () => {

  // const newCategory = await ItemCategory.findAll();
  // console.log (newCategory)

  return (
    <div className='app_category_container'>
    
      {foodCategory.map((t)=> (
        <div className='app_category_items'>
          <Link to={`/menu/${t.title}`}>
          <img className='app_category_image' src={t.image} alt=''/>
          <p className='p_category_title'>{t.title}</p>
          </Link>
          
        </div>
      ) )}
    </div>
  )
    
}

export default Main
