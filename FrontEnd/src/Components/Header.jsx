import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='h-16 pr-20 pl-10 text-white flex justify-between items-center sticky top-0 bg-black'>
    <div>
      <img src="" alt="logo Here " />
    </div>
    <div className='flex gap-8 text-lg font-medium '>
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/match"> Match </NavLink>
      <NavLink to="/players"> Players </NavLink>
      <NavLink to="/teams"> Teams </NavLink>
      <NavLink to="/rules"> Rules </NavLink>
      <NavLink to="/features"> Features </NavLink>
    </div>
    <div className='w-32'>

    </div>
    </div>
    </>
  )
}

export default Header
