import React from 'react'

export default function Signin() {
  return (
    <div>
      <div className="container">
        <form action="" className="form">
          <p className="text-lg signin-text">Sign In</p>
          <input className='text-field' type="email" placeholder='Enter your email' required/>
          <input className='text-field' type="password" placeholder='Enter your password' required/>
          <a href="" className='text-xsm'>Forgot password?</a>
          <button type='submit' className='btn signin-btn'>Sign In</button>
          <a href="" className='text-xsm'>Create account</a>
        </form>
      </div>
      
    </div>
  )
}
