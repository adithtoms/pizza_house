import mongoose from "mongoose";

const orderSchema= mongoose.Schema({
    uname:{type:String, required:true},
    email:{type:String, required:true},
    userid:{type:String},
    orderitems:[],
    shippingAddress:{type:Object},
    orderAmount:{type:String},
    isDelivered:{type:Boolean, default:false},
    transactionId:{type:String},  
},{timestamps:true})

const Order=mongoose.model('order',orderSchema)

export default Order