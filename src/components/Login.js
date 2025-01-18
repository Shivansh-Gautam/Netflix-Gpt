import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const toggleSignIn =()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute login-container">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_medium.jpg' alt='background'/>
      </div>
      <form className='absolute w-1/3 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-xl bg-opacity-80'>
      <h1 className='text-3xl font-bold py-4 px-2'>{isSignIn? "Sign In": "Sign Up"} </h1>
        {!isSignIn && <input type='text' placeholder='Full Name'className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>}
        <input type="text" placeholder="Email" className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
        <input type="password" placeholder="Password" className='p-4 my-4 w-full  bg-gray-800 rounded-lg'/>
        <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>{isSignIn? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login