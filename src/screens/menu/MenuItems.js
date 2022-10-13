import React, { useState } from "react";
import "./MenuItems.css";
import { useParams } from "react-router-dom";
import PopUpItem from "../../components/PopupItem/PopupItem";

// import {foodItem} from '../../constants'
// import Item from '../../components/Item/Item'

const MenuItems = ({
  foodItem,
  addItem,
  removeItem,
  cartItems,
  itemExists,
  addItemPopUpScreen,
}) => {
  const [popUpItem, setPopUpItem] = useState(false);
  const [product, selectProduct] = useState(null);

  const  {data}  = foodItem;
  const { id } = useParams();

  // console.log(id,data)
  const listMenu = data.filter(
    t => t.itemCategoryId == id 
    // (t) => t.itemCategoryId === id || t.subCategory === id
  );
  // console.log(listMenu)

  return (
    <div className="app_category_container">
      <div className="app_food_items">
        {listMenu.map((product) => (
          <div key={product.id}>
            <img className="app_category_image" src={product.image} alt="" />
            <p className="p_category_title">{product.title}</p>
            <p className="p_category_price">${product.unitPrice}</p>
            <button
              onClick={() => {
                selectProduct(product);
                setPopUpItem(true);
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
        <PopUpItem
          modal={popUpItem}
          modalClose={() => setPopUpItem(false)}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          cartItems={cartItems}
          itemExists={itemExists}
          addItemPopUpScreen ={addItemPopUpScreen}
        />
      </div>
    </div>
  );
};

export default MenuItems;
