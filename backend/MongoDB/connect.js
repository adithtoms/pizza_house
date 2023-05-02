import mongoose from "mongoose";


var mongo_url="mongodb+srv://adithtoms:hiHNPdfYtl3uYwRg@cluster0.ufs2fwk.mongodb.net/pizza_house"

mongoose.connect(mongo_url,{useUnifiedTopology:true, useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log("MongoDB connection successfull");
})

db.on('error',()=>{
    console.log("MongoDB connection failed");
})

export default mongoose