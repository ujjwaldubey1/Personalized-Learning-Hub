import React from 'react'
import Signup from './signup'
import Login from './Login' 
import Link from 'next/link'
const LandingPage = () => {
  return (
    <div>
    
     <Link href="/auth/Login">login</Link>
      <Link href="/auth/signup">Get Started</Link>
    </div>
  )
}

export default LandingPage
