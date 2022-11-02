import React from 'react'

export default function Signup() {
  return (
    <div>
      <div className="container">
        <form action="" className="form">
          <p className="text-lg signin-text">Sign Up</p>
          <input className='text-field' type="text" placeholder='Enter your name' required/>
          <input className='text-field' type="email" placeholder='Enter your email' required/>
          <input className='text-field' type="password" placeholder='Enter your password' required/>
          <input className='text-field' type="password" placeholder='Re-enter your password' required/>
          <input className='text-field' type="date" placeholder='Enter your DOB' required/>
          <button type='submit' className='btn signin-btn'>Sign Up</button>
        </form>
      </div>
      
    </div>
  )
}
