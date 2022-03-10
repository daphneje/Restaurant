import React from "react";
import "./PopUpItem.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const PopUpItem = ({
  modal,
  modalClose,
  manageItemQuantity,
  addInstruction,
  product,
  addItem,
  removeItem,
  cartItems,
}) => {
  
  const showHideClassName = modal
    ? "modal display-block"
    : "modal display-none";
  if (!modal) {
    return null;
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <img className="app_category_image" src={product.image} alt="" />
          <p className="p_category_title">{product.title}</p>
          <p className="p_category_price">${product.unitPrice.toFixed(2)}</p>
          <p className="p_category_price">{product.description}</p>
          <div className="counter">
            <button onClick={() => addItem(product)}>+</button>
            <div>{cartItems.find((item) => item.id === product.id).qty}</div>
            <button onClick={() => removeItem(product)}>-</button>
          </div>
        </div>
        <button type="button" class="button" onClick={modalClose}>
          Confirm
        </button>
      </section>
    </div>
  );
};

export default PopUpItem;
