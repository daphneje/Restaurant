import React from "react";
import { Main, MenuItems, Splash } from "../screens";
import { Route, Routes } from "react-router-dom";
import { CategoryBar, Cart, NavBar } from "../components";

const RoutesFile = ({
  foodCategory,
  foodItem,
  cartItems,
  addItem,
  removeItem,
  itemExists,
  addItemPopUpScreen,
  addSpecialInstruction,
  clearCart
}) => {
  return (
    <div className="content">
      <NavBar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/main" element={<Main foodCategory={foodCategory} />} />
        <Route
          path="/menu/:id"
          element={
            <>
              <CategoryBar foodCategory={foodCategory} />
              <div>
                <MenuItems
                  foodItem={foodItem}
                  addItem={addItem}
                  removeItem={removeItem}
                  cartItems={cartItems}
                  itemExists ={itemExists}
                  addItemPopUpScreen ={addItemPopUpScreen}
                  addSpecialInstruction = {addSpecialInstruction}

                />
              </div>
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addItem={addItem}
              removeItem={removeItem}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RoutesFile;
