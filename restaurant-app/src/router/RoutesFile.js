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
  itemInCart,
  itemExists,
  addSpecialInstruction
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
              <CategoryBar />
              <div>
                <MenuItems
                  foodItem={foodItem}
                  addItem={addItem}
                  removeItem={removeItem}
                  cartItems={cartItems}
                  itemInCart={itemInCart}
                  itemExists ={itemExists}
                  addSpecialInstruction ={addSpecialInstruction}

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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RoutesFile;
