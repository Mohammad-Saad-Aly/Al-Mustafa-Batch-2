import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../Home/Home'

export default function Navbar() {
  return (
    <div>
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/Gallery' >Gallery</NavLink>
        </nav>
    </div>
  )
}
