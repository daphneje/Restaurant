import React from 'react'
import './MenuItems.css'
import { useParams } from 'react-router-dom'

// import { useState } from 'react'

const SubMenuItem = ({foodItem, addItem}) => {
  
  const {foodItemList} = foodItem
  const { id } = useParams();
  const sublistMenu = foodItemList.filter(t => t.subCategory === id )
  
 
  return (
    <div className='app_category_container'>
      <div className='app_food_items'>
      {sublistMenu.map((product)=> (
        <div key = {product.id}>
          <img className='app_category_image' src={product.image} alt=''/>
          <p className='p_category_title'>{product.title}</p>
          <p className='p_category_price'>${product.unitPrice.toFixed(2)}</p>
          <button onClick={()=>addItem(product)}>
            Add To Cart
          </button>
        </div>
      ) )}
        </div> 
    </div>
  )
}

export default SubMenuItem
