import React from 'react'
import {Main, MenuItems} from '../screens'
import {Route, Routes} from 'react-router-dom'
import { CategoryBar, Cart } from '../components'


const RoutesFile = ({foodCategory, foodItem, cartItems, addItem}) => {

  return (
    <div className='content'>
      <Routes>
        <Route path='/' element = {<Main foodCategory = {foodCategory}/>} />

        <Route path='/menu/:id' element = {<>
        <CategoryBar/> 
        <MenuItems foodItem = {foodItem} addItem={addItem} />
        </>} />

        <Route path='/cart' element={<Cart cartItems={cartItems} addItem={addItem}/>}/>

      </Routes>
    </div>
  )
}

export default RoutesFile
