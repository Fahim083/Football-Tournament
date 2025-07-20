import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky top-0 bg-black border-b-2 border-gray-800 h-20 pr-20 pl-10  flex items-center justify-between'>
    {/* <div className='h-16 pr-20 pl-10 text-white flex  items-center'> */}
    <div>
      <img src="y" alt="logo Here" />
    </div>
    <div className='flex w-[600px] gap-8 text-xl font-medium '>
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
    // </div>
  )
}

export default Header
