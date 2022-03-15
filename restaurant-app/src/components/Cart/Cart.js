import React from 'react'
import API from '../../api';
import './Cart.css'

const Cart = ({cartItems, addItem, removeItem, clearCart}) => {

  const subTotal = cartItems.reduce((a, c) => a + c.qty * c.unitPrice, 0);

  function noOrdersFoundMessage(cartItems){
      if(cartItems.find((item) => !item.qty == 0)){
          return null
      }
      return <div>No Order Items</div>
  }


  const checkout = async () => {
    try {
        const orderRes = await API.post("/orders", { 
            "tableId": 18,
            "createOrder": {
                "restaurantId": 1,
                "billAmount": subTotal,
                "noOfPax": 3,
                "status": "New"
            }
        })
        if (orderRes.status === 200) {
            console.log("cartItems", cartItems)
            alert(`Success! Your Order id is #${orderRes.data.data.orderId}.`)
           
            const orderItemRes = await cartItems.map((t) => ( API.post("/orderItems",  
               {
                "orderId": orderRes.data.data.orderId,
                "createOrderItem": {
                    "itemId": t.itemId,
                    "itemTitle": t.title,
                    "itemUnitPrice": t.unitPrice,
                    "quantity": t.qty,
                    "specialRequest": "",
                    "status": "New"
                    }
                })
            ))
            
            clearCart();

            // const orderItemRes = await API.post("/orderItems",  orderPost)
            console.log("OrderItemRes", orderItemRes)
        } else {
            alert('There was an error. Please try again.')
        }
        //console.log(orderRes)

        

    } catch(err) {
        console.log(`Error: ${err.message}`)
    }
  }

  return (
    <div className='block'>
        <div className='app_cart_header'>Order Items</div>
        {noOrdersFoundMessage(cartItems)}
        <div>
            {cartItems.map((item)=>(
                item.qty <= 0?
               null: <>
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
                        {item.qty} x ${item.unitPrice}
                    </div>
                </div> 
               <div>Special Instruction: {item.instruction}</div>
               </>
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
            <button onClick={()=>checkout()}>
                Submit Order
            </button>
            </div>
        </>)}
    </div>
  )
}

export default Cart
