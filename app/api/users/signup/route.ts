import {connect} from '@/dbConfig/dbConfig'
import User from "@/models/userModel";
import bcryptjs from "bcryptjs"
import { sendEmail } from "@/helpers/mailer";
import { NextRequest,NextResponse} from 'next/server'
import { error } from 'console'
import { request } from 'http'








connect()


export async function POST( request: NextRequest){
    try {
       const reqBody =  await request.json()
       const {username,email,password} = reqBody
// validation 
console.log(reqBody);
  
//check if user already exists

const user = await User.findOne({email})

if (user) {

    return NextResponse.json({error: 'User already exists'},  {status : 400})

}



const salt =  await bcryptjs.genSalt (10);
const hashedpassword = await bcryptjs.hash(password,salt)

const newUser = new User ({
    username,
    email,
    password:hashedpassword
})

const savedUser = await newUser.save()
        console.log(savedUser);



 
await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

return NextResponse.json({
    message: "User created successfully",
    success: true,
    savedUser
})








    } catch (error:any) {
       
        return  NextResponse.json ({error: error.message}, {status : 500})
    }
   
   
   
}
























