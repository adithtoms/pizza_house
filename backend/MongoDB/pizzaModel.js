import mongoose from 'mongoose'

const pizzaSchema=mongoose.Schema({
name:{type:String, required:true},
category:{type:String, required:true},
varients:[],
price:[],
image:{type:String, required:true},
description:{type:String, required:true},

},{
    timestamps:true,
})

const pizzaModel=mongoose.model("pizzas",pizzaSchema)

export default pizzaModel