import React from 'react'
import './Cart.css'

const Cart = ({cartItems, addItem, removeItem}) => {

  const subTotal = cartItems.reduce((a, c) => a + c.qty * c.unitPrice, 0);

  return (
    <div className='block'>
        <div className='app_cart_header'>Order Items</div>
        {cartItems.length === 0 && (<div>No Order Items</div>
        )}
        <div>
            {cartItems.map((item)=>(
                <div key = {item.id} className='app_checkout_list'>
                    <div className='col-1'>{item.title}</div>
                    <div className='col-2'>
                        <button onClick={()=> removeItem(item)}>
                            -
                        </button>{' '}
                        <button onClick ={()=> addItem(item)}>
                            +
                        </button>
                    </div>
                    <div className='col-2 text-right' >
                        {item.qty} x ${item.unitPrice.toFixed(2)}
                    </div>
                </div>
            ))}
        </div>
        {cartItems.length !== 0 && (
          <>
          <hr/>
           <div className="app_checkout_row">
              <div className="col-1">Sub Total:</div>
              <div className="col-2 text-right">${subTotal.toFixed(2)}</div>
            </div>
            <hr/>
            <div className='app_cart_checkout'>
            <button>
                Checkout
            </button>
            </div>
        </>)}
    </div>
  )
}

export default Cart