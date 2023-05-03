import express from "express";
import Order from "../MongoDB/orderModel.js";
import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51N2KFUSINe6spdD8p4BTNMyLiDl0qSQgTiwGFdj0IrxgJTHjBptnhMT7M3WOOyLNgAvT4lF1lqlOOYnwEfzoMm1K00TaAeBJJN');

const router=express.Router()

router.post('/placeorder', async(req,res)=>{
    const {token,subTotal,currentUser,cartItems} =req.body
try {
    const customer= await stripe.customers.create({
        email:token.email,
        source:token.id
    })
    const payment= await stripe.paymentIntents.create({
        amount:subTotal*100,
        currency:'inr',
        customer:customer.id,
        receipt_email:token.email
    },{
        idempotencyKey:uuidv4()
    })
    if(payment){
        const newOrder=new Order({
         uname:currentUser.uname,
         email:currentUser.email,
         userid:currentUser._id,
         orderitems:cartItems,
         orderAmount:subTotal,
         shippingAddress:{
            street:token.card.address_line1,
            city:token.card.address_city,
            country:token.card.address_country,
            pincode:token.card.address_zip
         }  ,
         transactionId:payment.source
        })
        newOrder.save()
        res.send("Payment success")
    } else{
        res.send("Payment failed")
    }
} catch (error) {
    res.status(400).json({message:"Something went wrong", error:error.stack})
   
}

})

router.post('/getuserorder', async(req,res)=>{
    const{userid}=req.body
    try {
        const orders= await Order.find({userid})
        res.status(200).send(orders)
    } catch (error) {
        res.status(400).json({
            message:"something went wrong",
            error:error.stack
        })
        
    }
})
router.get("/alluserorder", async (req, res) => {
    try {
      const orders = await Order.find({});
      res.status(200).send(orders);
    } catch (error) {
      res.status(400).json({
        message: "Something Went Wront",
        error: error.stack,
      });
    }
  });

  router.post("/deliverorder", async (req, res) => {
    const orderid = req.body.orderid;
    try {
      const order = await Order.findOne({ _id: orderid });
      order.isDeliverd = true;
      await order.save();
      res.status(200).send("Order deliverd success");
    } catch (error) {
      res.status(400).json({
        message: "Something Went Wront",
        error: error.stack,
      });
    }
  });

export default router