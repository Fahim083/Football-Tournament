import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='h-16 pr-20 pl-10 text-white flex justify-between items-center sticky top-0 bg-black'>
    <div>
      <img src="y" alt="logo Here" />
    </div>
    <div className='flex gap-8 text-lg font-medium '>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/home"> Home </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/match"> Match </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/players"> Players </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/teams"> Teams </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/rules"> Rules </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/features"> Features </NavLink>
    </div>
    <div className='w-32'>

    </div>
    </div>
    </>
  )
}

export default Header
