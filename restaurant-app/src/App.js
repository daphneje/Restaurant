import React, {useState}  from 'react';
import {NavBar} from './components'
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Cart from './components/Cart/Cart';
import { foodCategoryList } from './constants';
import { foodItemList } from './constants';
import RoutesFile from './router/RoutesFile';

// const { testConnection} = require('./models');

// testConnection();

const foodCategory = {foodCategoryList}
const foodItem = {foodItemList}

function App() {

const [cartItems, setCartItems] = useState([]);

const addItem = (product) => {
  // console.log(cartItems)
  const exist = cartItems.find((item)=> item.id === product.id );
  if (exist) {
    setCartItems (
      cartItems.map((item)=> item.id === product.id ? 
      {...exist, qty: exist.qty + 1 } : item )
    ) 
    // console.log(cartItems)
  } else {
    setCartItems([...cartItems, {...product, qty: 1}]);
    // console.log(cartItems)
  }
};
const removeItem = (pdt) => {
  const exist = cartItems.find((x) => x.id === pdt.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== pdt.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === pdt.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};

  return (
    <Router>
      <div className="App">
        <RoutesFile 
        foodCategory = {foodCategory} 
        foodItem = {foodItem} 
        cartItems = {cartItems}
        addItem={addItem}
        removeItem={removeItem}/>
      </div>
    </Router>
  );
}

export default App;
