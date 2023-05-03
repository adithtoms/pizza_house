import mongoose from "mongoose";


var mongo_url=""

mongoose.connect(mongo_url,{useUnifiedTopology:true, useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log("MongoDB connection successfull");
})

db.on('error',()=>{
    console.log("MongoDB connection failed");
})

export default mongoose