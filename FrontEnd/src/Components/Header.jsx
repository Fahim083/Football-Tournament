// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div className='sticky top-0 bg-black border-b-2 border-gray-800 h-20 pr-20 pl-10  flex items-center justify-between z-50'>
//     {/* <div className='h-16 pr-20 pl-10 text-white flex  items-center'> */}
//     <div>
//       <img src="y" alt="logo Here" />
//     </div>
//     <div className='flex w-[600px] gap-8 text-xl font-medium '>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/home"> Home </NavLink>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/match"> Match </NavLink>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/players"> Players </NavLink>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/teams"> Teams </NavLink>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/rules"> Rules </NavLink>
//       <NavLink className={({isActive}) => isActive ? "text-red-400 " : "hover:text-yellow-300"} to="/features"> Features </NavLink>
//     </div>
//     <div className='w-32'>

//     </div>
//     </div>
//     // </div>
//   )
// }

// export default Header


import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Match', path: '/match' },
    { name: 'Players', path: '/players' },
    { name: 'Teams', path: '/teams' },
    { name: 'Rules', path: '/rules' },
    { name: 'Features', path: '/features' },
  ];

  return (
    <header className='sticky top-0 bg-black border-b-2 border-gray-800 z-50'>
      <div className='flex justify-between items-center h-20 px-5 md:px-10 relative'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img src={logo} alt="Logo" className='h-10 w-auto rounded-full' />
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8 text-xl font-medium absolute left-1/2 transform -translate-x-1/2'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-red-400' : 'hover:text-yellow-300'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <div className='md:hidden flex-shrink-0'>
          <button onClick={toggleMenu} className='text-white text-3xl'>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className='md:hidden bg-black flex flex-col gap-4 px-5 pb-5'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-red-400 text-lg' : 'hover:text-yellow-300 text-lg'
              }
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
