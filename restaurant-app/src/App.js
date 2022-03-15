import React, { useState, useEffect } from "react";
// import { NavBar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Cart from './components/Cart/Cart';
// import { foodCategoryList } from "./constants";
// import { foodItemList } from "./constants";
import RoutesFile from "./router/RoutesFile";
import API from "./api";

// const { testConnection} = require('./models');

// testConnection();

// const foodCategory = { foodCategoryList };
// let foodCategory = [];
// const foodItem = { foodItemList };

function App() {

  const [foodCategory, setFoodCategory] = useState({});
  const [foodItem, setFoodItem] = useState({});

  useEffect( ()=> {
    const fetchdata1 = async()=>{
    const res = await API.get("/itemCategories")
    setFoodCategory(res.data);
    };

    const fetchdata2 = async()=>{
      const res2 = await API.get("/items")
      setFoodItem(res2.data);
    };
    fetchdata1();
    fetchdata2();
  },[]);


  const [cartItems, setCartItems] = useState([]);
  const [cartItemExists, setCartItemExists] = useState();

  function itemExists(cartItems, product) {
    const exist = cartItems.find((item) => item.itemId === product.itemId);
    if (exist) {
      return exist;
    }
    return false;
  }

  const addSpecialInstruction = (product, instruction) => {
      setCartItems(
        cartItems.map((item) =>
          item.itemId === product.itemId ? { ...item, instruction: instruction } : item
        )
      );
    } 

  const addItem = (product) => {
    setCartItemExists(true);
    // console.log(cartItems)
    const exist = itemExists(cartItems, product);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.itemId === product.itemId ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log(cartItems)
    }
  };
  const removeItem = (pdt) => {
    const exist = itemExists(cartItems, pdt);
    if (exist.qty <= 1) {
      setCartItemExists(false);
      setCartItems(cartItems.filter((x) => x.itemId !== pdt.itemId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === pdt.itemId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const clearCart = ()=>{
    setCartItems([]);
  }

  return (
    <Router>
      <div className="App">
        <RoutesFile
          foodCategory={foodCategory}
          foodItem={foodItem}
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          itemInCart = {()=> setCartItemExists(false)}
          itemExists = {itemExists}
          addSpecialInstruction = {addSpecialInstruction}
          clearCart = {clearCart}
        />
      </div>
    </Router>
  );
}

export default App;
