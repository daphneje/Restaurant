import React, {useState} from "react";
import "./PopupItem.css";
// import { useParams } from "react-router-dom";
// import { useState } from "react";

const PopUpItem = ({
  modal,
  modalClose,
  manageItemQuantity,
  addInstruction,
  product,
  addItem,
  removeItem,
  cartItems,
  itemInCart,
  itemExists,
  addSpecialInstruction
}) => {
  
  const [instruction, setInstruction]= useState("")

  function showQuantity(cartItems, product){
    const searchItem = cartItems.find((item) => item.itemId === product.itemId)
    if(!searchItem){
      return 0
    }
      return cartItems.find((item) => item.itemId === product.itemId).qty
  }

  function handleSubmit(event){
    event.preventDefault();
    modalClose()
    addSpecialInstruction(product,instruction)
    setInstruction(itemExists(cartItems, product).instruction)
    
  }
  function handleChange(event){
    event.preventDefault();
    setInstruction(event.target.value)
    
  }

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
          <p className="p_modal_title">{product.title}</p>
          <p className="p_category_price">${product.unitPrice}</p>
          <p className="p_category_price">{product.description}</p>

          <div className="app_modal_button">
            <button onClick={() => addItem(product)}>+</button>
            <div>{showQuantity(cartItems, product)}</div>
            <button onClick={() => removeItem(product)}>-</button>
          </div>
        </div>
        <form>
          <label>
            Add Instruction
            <input type = "text" value= {instruction} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        {/* <button type="button" class="button" onClick={modalClose}>
          Confirm
        </button> */}
      </section>
    </div>
  );
};

export default PopUpItem;
