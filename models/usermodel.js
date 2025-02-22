import { verify } from "crypto";
import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,'please provide username'],
        unique: true
    },
    email:{
        type: String,
        required: [true,'please provide username'],
        unique: true
    },
    password:{
        type: String,
        required: [true,'please provide username']
    
    },
    isVerfied:{
        type: Boolean, 
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
}) 

const User = mongoose.models.users|| mongoose.model( 'users',userschema)   
export default  User


