import React from 'react'
import './Main.css'
// import {foodCategory} from '../../constants'
import { Link } from 'react-router-dom'



const Main = ({foodCategory}) => {

  const {foodCategoryList} = foodCategory;

  // console.log (foodCategory)
    return (
    
    <div className='app_category_container'>
      {foodCategoryList.map((t)=> (
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

export default Main;
