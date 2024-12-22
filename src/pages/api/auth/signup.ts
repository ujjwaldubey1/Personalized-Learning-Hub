import User from "@/model/UserSignupSchema";
import Dbconnect from "@/lib/Dbconnection";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, password, designation } = req.body;


  if (!name || !email || !password || !designation) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  if (password.length < 10) {
    return res.status(400).json({ error: "Password must be at least 10 characters long" });
  }

  const validDesignations = ["Student", "Intern", "Senior Developer", "Manager"];
  if (!validDesignations.includes(designation)) {
    return res.status(400).json({ error: "Invalid designation" });
  }

  try {
    await Dbconnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      designation,
    });
    await newUser.save();

    return res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default signup;
