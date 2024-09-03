import { verify } from "crypto";
import mongoose from "mongoose";
const customerchema = new mongoose.Schema({  

    customer_id:{
        type: String,
        required: true,
        unique: true
    },

    customer_name:{
        type: String,
        required: true,
        unique: true
    },

    state:{
        type: String,
        required: true,
        unique: true
    },

    region:{
        type: String,
        required: true,
        unique: true
    },






  })
    

    
    
    
    
    
    const Customer = mongoose.models.users|| mongoose.model( 'customer',customerchema)   
    export default  Customer
    