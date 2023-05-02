import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderActons';


function CheckOut({subTotal}) {

    const dispatch=useDispatch()

 const tokenHandler=(token)=>{
    dispatch(placeOrder(token,subTotal))
    console.log(token);
 }

  return (
    <StripeCheckout
     amount={subTotal * 100}
     shippingAddress
     token={tokenHandler}
     stripeKey='pk_test_51N2KFUSINe6spdD8tNWIUUgNwYw1eLkQc0qcLrIQkeGcOSOUCBNbOexI86i3BRYwa3hiBETAHnaebseDcs1k4gew00aVDQwxiQ'
     currency='INR'
    >
         <Button>Pay Now</Button>
    </StripeCheckout>
  )
}

export default CheckOut