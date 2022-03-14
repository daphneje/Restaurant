import React, { useState, useEffect } from "react";
import "./PopupItem.css";
// import { useParams } from "react-router-dom";
// import { useState } from "react";

const PopUpItem = ({
  modal,
  modalClose,
  product,
  addItem,
  removeItem,
  cartItems,
  itemExists,
  addSpecialInstruction,
}) => {
  const [instruction, setInstruction] = useState("");

  function showQuantity(cartItems, product) {
  
    if (!itemExists(cartItems, product)) {
      return 0;
    }
    return itemExists(cartItems, product).qty;
  }

  function handleSubmit(event) {
    event.preventDefault();
    addSpecialInstruction(product, instruction);
    setInstruction(null);
    modalClose();
  }

  function handleChange(event) {
    event.preventDefault();
    setInstruction(event.target.value);
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
          <p className="p_category_title">{product.title}</p>
          <p className="p_category_price">${product.unitPrice.toFixed(2)}</p>
          <p className="p_category_price">{product.description}</p>

          <div className="counter">
            <button onClick={() => addItem(product)}>+</button>
            <div>{showQuantity(cartItems, product)}</div>
            <button onClick={() => removeItem(product)}>-</button>
          </div>
        </div>
        {itemExists(cartItems, product) ? (
          <form>
            <label>
              Add Instruction
              <input type="text" value={instruction} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        ) : (
          <button type="button" class="button" onClick={modalClose}>
            Confirm
          </button>
        )}

      </section>
    </div>
  );
};

export default PopUpItem;
