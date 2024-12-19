import User from "@/app/model/UserSignupSchema";
import bcrypt from "bcrypt";
import { error } from "console";
import jwt from "jsonwebtoken";

const Login = async (req, res) =>{

      try {
        const {password , email} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser) {
          return res.status(400).json({error:"User Do Not Exist"})
        }

        const isPasswordRight = await bcrypt.compare(password,existingUser.password)

        if(!isPasswordRight) {
          return res.status(400).json({error:"Check the password "})
        }
        const token = jwt.Sign({id:existingUser._id}, process.env.JWT_SECRET, {expiresIn:"2h"})

        return res.status(200).json({message:"successfully Login",token})

      } catch (error) {
        console.error(error)
        return res.status(400).json({error:"Some Internal error"})
      }
}