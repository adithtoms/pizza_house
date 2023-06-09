import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    uname:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, required:true, default:false},
},{
    timestamps:true
})

const User=mongoose.model('users',userSchema)

export default User