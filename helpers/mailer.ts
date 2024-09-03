import nodemailer from'nodemailer'
import User from "@/models/userModel";
import bcryptjs from 'bcryptjs';



export const sendEmail = async ({email,emailType,userId}:any  ) => {
    try {

//TODO configure mail for usage
const hashedToken = await bcryptjs.hash(userId.toString(), 10)

if (emailType === "VERIFY") {
    await User.findByIdAndUpdate
    (userId,{
         $set:{
                 verifyToken: hashedToken,
                 verifyTokenExpiry:( Date.now() + 3600000) 
              }
            
            }) 
} else if (emailType === "RESET"){
    await User.findByIdAndUpdate
    (userId,{
        $set:{
            forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry:( Date.now() + 3600000) 
        }
        })
}
  
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d5aac5f95663d7",
              pass: "9624484e12facb"             
                }, 
            });

            
            const mailOptions = {  
                from:  'sharmaniraj76320@gmail.com', // sender address
                to: email, 
                subject: emailType === 'verify'? "verify your email" : "Reset your password" ,// Subject line
                html:  `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
                or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                </p>`
                }


const mailResponse = await transporter.sendMail  (mailOptions)

return mailResponse



    } catch (error:any) {
        throw new Error(error.message)
    }
}