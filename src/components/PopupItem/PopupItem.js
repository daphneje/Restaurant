import React, { useState, useEffect } from "react";
import "./PopupItem.css";
// import { useParams } from "react-router-dom";
// import { useState } from "react";

const PopUpItem = ({
  modal,
  modalClose,
  product,
  addItemPopUpScreen,
}) => {
  const [instruction, setInstruction] = useState("");
  const [count, setCount] = useState(0)

  function add(){
   setCount(count + 1)
  }

  function subtract(){
    if(count<1){
    return null
    }
    setCount(count - 1)
  }


  function handleSubmit(event) {
    event.preventDefault();
    // addSpecialInstruction(product, instruction);
    addItemPopUpScreen(instruction,count,product)
    console.log(instruction)
    console.log(count)

    setInstruction(null);
    setCount(0)
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
        <div className= 'section-2'>
          <img className="app_category_image" src={product.image} alt="" />
          <p className="p_modal_title">{product.title}</p>
          <p className="p_category_price">${product.unitPrice}</p>
          <p className="p_category_price">{product.description}</p>

          <div className='count_button'>
            <button onClick={subtract}>-</button>
            <div>{count}</div>
            <button onClick={add}>+</button>
          </div>
        </div>
        
          <form className = "form">
            <p>Special Request:</p>
            <label>
              <input type="text" className= "text" value={instruction} onChange={handleChange} />
            </label>
            <input type="submit" class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full h-8" value="Submit" onClick={handleSubmit} />
          </form>
        
        
          {/* <button type="button" class="button" onClick={modalClose}>
            Confirm
          </button> */}
        

      </section>
    </div>
  );
};

export default PopUpItem;
