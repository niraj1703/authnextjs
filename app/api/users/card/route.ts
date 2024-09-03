import {connect} from '@/dbConfig/dbConfig'
import Card from '@/models/card.model'
import product from '@/models/product.model'
import bcryptjs from "bcryptjs"
import { sendEmail } from "@/helpers/mailer";
import { NextRequest,NextResponse} from 'next/server'
import { error } from 'console'
import { request } from 'http'
import Router from 'next/router';







connect()

// const router = useRouter ()
export async function POST( request: NextRequest){
    try {
       const reqBody =  await request.json()
       const {username,email,password} = reqBody
// validation 
console.log(reqBody);
  














    } catch (error:any) {
       
       
    }
   
   
   
}
























