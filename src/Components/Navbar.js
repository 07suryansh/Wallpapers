import React from 'react'
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="left">
      <ul className="nav-item">
            <li className="nav-list text-lg">Wallpaper</li>
            <li className="nav-list text-sm">NITH</li>
        </ul>
      </div>
      <div className="right">
        <p className='text-sm profile-link'>Hi, Suryansh <CgProfile className='profile-icon'/></p>
      </div>
        
    </nav>
    
  )
}
