import React from 'react'
import './Main.css'
// import {foodCategory} from '../../constants'
import { Link } from 'react-router-dom'
// import imageCategory from '../../constants/imageCategory'


const Main = ({foodCategory}) => {

  const {data} = foodCategory;
  
  return (
  
    <div className='app_category_container'>
      {data.map((t)=> (
        <div className='app_category_items' key={t.itemCategoryId}>
          <Link to={`/menu/${t.itemCategoryId}`}>
          
          <img className='app_category_image' src={t.image} alt={t.image}/>
          <p className='p_category_title'>{t.title}</p>
          </Link>
        </div>
      ) )}

    </div>
  )
    
}

export default Main;
