import React from 'react'
import {Main, MenuItems, Splash,SubMenuItem} from '../screens'
import {Route, Routes} from 'react-router-dom'
import { CategoryBar, Cart, NavBar, PopupItem } from '../components'


const RoutesFile = ({foodCategory, foodItem, cartItems, addItem, removeItem}) => {

  return (
    <div className='content'>
      <NavBar cartItems={cartItems}/>
      <Routes>
        <Route path='/' element = {<Splash/>} />
        <Route path='/main' element = {<Main foodCategory = {foodCategory}/>} />
        <Route path='/menu/:id' element = {<>
        <CategoryBar/> 
     <div>
     <MenuItems foodItem = {foodItem} addItem={addItem} />
        <SubMenuItem foodItem = {foodItem} addItem={addItem} />
        <PopupItem cartItems = {cartItems} removeItem = {removeItem} addItem = {addItem}/>
     </div>
        
       
        
        </>} />

        <Route path='/cart' element={<Cart cartItems={cartItems} addItem={addItem} removeItem={removeItem}/>}/>

      </Routes>
    </div>
  )
}

export default RoutesFile
