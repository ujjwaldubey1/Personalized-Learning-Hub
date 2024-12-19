import User from "@/app/model/UserSignupSchema";
import Dbconnect from "@/app/lib/Dbconnection";
import bcrypt from "bcrypt";
import { NextApiRequest,NextApiResponse } from "next";
import { error } from "console";

const Signup = async (req:NextApiRequest,res:NextApiResponse) =>{

  const validDesignetion = ["Student","Intern","Senier Devloper","Manager"]
  if(req.method !== "POST") {
    return res.status(500).json({error:"Invalid request"})
  }

  const {name , email , password, designation} = req.body ;

  if(!name || !email || !password || !designation) {
    return res.status(400).json({error:"All the feilds are required"})
  }

  const emailRejex  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRejex.test(email)) {
    return res.status(400).json({error:"Not a valid email"})
  }
  if(password.length!== 10) {
    return res.status(400).json({error:"Give me more stronger password "})
  }
  if(!designation || !validDesignetion.includes(designation)) {
    return res.status(400).json({error:"Not a valid Designetion"})
  }
  
  try {
    Dbconnect();

    const existingUser = await User.findOne({email})
    if(existingUser) {
      return res.status(400).json({error:"Existing user found"})
    }

    const hassedPassword = await bcrypt.hash(password,10);
    const newUser =  new User({name,email,password:hassedPassword , designation})
    await newUser.save();

    return res.status(200).json({message:"You have logined successfully"})
    
  } catch (error) {
    console.error(error)
    return res.status(400).json({error:"Internal error"})
    
  }


}
export default Signup