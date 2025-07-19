import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/match"> Home </NavLink>
      <NavLink to="/rules"> Home </NavLink>
      <NavLink to="/teams"> Home </NavLink>
    </div>
  )
}

export default Header
