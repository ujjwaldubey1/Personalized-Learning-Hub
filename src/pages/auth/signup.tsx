"use client";
import React, { useState, useEffect } from "react";
import "@/app/globals.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    designation: "",
  });
  const [message, setMessage] = useState("");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending request to API...");
      const response = await fetch("../api/auth/signup", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      const result = await response.json();
      console.log("API result:", result);

      if (response.ok) {
        setMessage("Signup successful!");
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage("Internal error occurred. Please try again later.");
    }
  };

  if (!isClient) {
    return null; 
  }

  return (
    <div className="w-screen h-screen m-[40px] bg-slate-600">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="bg-red-500"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          className="bg-red-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="bg-red-500"
        />
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Enter your designation"
          required
          className="bg-red-500"
        />
        <button type="submit" className="bg-blue-500 p-2 mt-2">
          Submit
        </button>
      </form>
      <div className="text-white mt-4">{message}</div>
    </div>
  );
};

export default Signup;
