import React from 'react'

export default function Signin() {
  return (
    <div>
      <div className="container">
        <form action="" className="form">
          <p className="text-lg">Sign In</p>
          <input className='text-field' type="email" placeholder='Enter your email'/>
          <input className='text-field' type="password" placeholder='Enter your password'/>
          <button type='submit' className='btn'>Sign In</button>
        </form>
      </div>
      
    </div>
  )
}
