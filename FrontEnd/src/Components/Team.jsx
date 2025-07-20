import React from 'react'
import logo from '../assets/react.svg'

const Team = ({teamLogo,teamName,teamColor}) => {
  return (
    <div className="w-[450px]  border-1 opacity-90 border-gray-300 rounded-sm h-[180px] p-5 flex flex-col justify-between hover:cursor-pointer hover:opacity-100 transition-opacity duration-300"
         style={{backgroundColor: teamColor || 'rgba(39,39,39)'}}>
      <img src={logo} alt="team logo" className='w-10 h-10' />
      <h1 className='text-3xl'>{teamName}</h1>
    </div>
  )
}

export default Team
