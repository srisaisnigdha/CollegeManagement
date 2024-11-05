import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {


  return (
    <div className='Navbar'>
      <nav>
        <div className='heading'>
          <h2><span id="clg">COLLEGE</span> MANAGEMENT</h2>
        </div>
        <div className='navlinks'>
          <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className={(e) => { return e.isActive ? "blue" : "" }} to="/login"><li>Login</li></NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;


