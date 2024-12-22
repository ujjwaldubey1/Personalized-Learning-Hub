"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import "@/app/globals.css"

const Login =  () => {
  const[email,setEmail]  = useState("")
  const[password,setPassword] = useState("")
  const[message,setMessage] = useState("")
  const[isLogin,setIsLogin] = useState(false)
  const router = useRouter();

  const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch("../api/auth/Login",{
            method:"POST",
            headers : {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({email,password})
          })
          const result = await response.json();
          if(response.ok) {
            console.log("signup success")
            setMessage("signup success")
            setIsLogin(true)
            router.push("http://localhost:3000/auth/dashboard")
            console.log(result)
          }
          else {
              setMessage(result.message|| "login Failed")
              setIsLogin(false)
          }
          console.log(response)
        } catch (error) {
          setMessage("error occured internally")
          console.log(error , "Some internal error")
        }
  }

  return (
    <div className='m-10 bg-slate-500'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className='text-lg'>Email:</label>
        <input type="text"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 bg-gray-600 rounded-md shadow-md' />
        <label htmlFor="email" className='text-lg'>Password</label>
        <input type="password"
                name= "password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='p-3 bg-gray-600 rounded-md shadow-md' />

                <button type="submit">submit </button>
      </form>
      <div>{message} </div>
    </div>
  )
}

export default Login