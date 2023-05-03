import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, deleteFromCart} from '../actions/cartActions'
import CheckOut from '../components/CheckOut'


function Cart() {

  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems

   var subTotal= cartItems.reduce((x,item)=>x+item.price,0)

  const dispatch=useDispatch()




  return (
    <div >
      <div className='row justify-content-center'>

        <div className='col-md-6'>
          <h1>Cart</h1>
          {cartItems.map(item => (
            <div key={item.name} className='conti border mt-1'>
              <div className='m-2  p-2 '>
              <img style={{width:"80px",height:"80px"}} src={item.image} alt='img'></img>

              </div>
              <div className='text-left m-2  p-2 w-100'>
                <h4>{item.name}[{item.varient}]</h4>
                <h5>Price: {item.quantity}*{item.prices[0][item.varients]}={item.price}</h5>
                <h6 style={{ display: "inline" }}>Quantity :</h6>
                {/* <i className='fa fa-minus' aria-hidden="true" onClick={()=>{dispatch(addToCart(item,(item.varients),item.quantity-1))}}></i> */}
                <b className='border px-2'>{item.quantity}</b>
                {/* <i className='fa fa-plus'  aria-hidden="true" onClick={()=>{dispatch(addToCart(item,(item.varients),item.quantity+1))}}></i>        */}
                       </div>
              <div className='m-2  p-2 '>
              <i className='fa fa-trash' aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>             

              </div>
            </div>
          ))}

        </div>
        <div className='col-md-4'>
          <div className='border bg-light p-1 mt-5'>
           <b> <h6 className='p-2 '>Price Details</h6></b>
            <hr></hr>
            <div className='p-2'>
             <b> <p>Price: {subTotal}</p></b>
              <p>No. of Items: {cartItems.length}</p>
              <p>Delivery Charge: <b>0/-</b></p>
              <hr></hr>
              <h5>Grand Total: Rs <span style={{color:"green"}}>{subTotal}</span> /- </h5>
              <CheckOut subTotal={subTotal} />

            </div>

          </div>
        </div>

      </div>



    </div>
  )
}

export default Cart