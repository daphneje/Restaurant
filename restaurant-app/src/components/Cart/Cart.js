import React from 'react'
import './Cart.css'

const Cart = ({cartItems, addItem}) => {
    // const { cartItems, onAdd, onRemove } = props;
    // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    // const serviceFee = itemsPrice * 0.10;
    // const gst = (itemsPrice + serviceFee)*0.07
    // const totalPrice = itemsPrice + serviceFee + gst;

  return (
    <aside className='block'>
        
        <div className='app_cart_header'>Order Items</div>
        {cartItems.length === 0 && (<div>No Order Items</div>
        )}
        <div>
            {cartItems.map((item)=>(
                <div key = {item.id} className='app_checkout_list'>
                    <div>{item.title}</div>
                    <div>
                        {/* <button onClick={()=> onRemove(item)}>
                            -
                        </button>{' '}
                        <button onClick ={()=> onAdd(item)}>
                            +
                        </button> */}
                    </div>
                    <div>
                    {item.qty} x ${item.unitPrice.toFixed(2)}
                    {/* {item.qty} */}
                    </div>
                    {/* <div>${item.unitPrice.toFixed(2)}</div> */}
                </div>
            ))}
        </div>
    </aside>
  )
}

export default Cart
