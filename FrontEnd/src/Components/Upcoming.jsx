import React from 'react'
import logo from '../assets/react.svg'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loading from './Loading'

const Upcoming = () => {
  const {data ,isLoading}= useQuery({
    queryKey: ['upcoming'],
    queryFn: async () => {
      return await axios.get("http://0.0.0.0:4000/upcomingMatches") },
    staleTime: 1000 * 60 * 20, // 20 minutes
    })

    if (isLoading) {
      return <Loading />;
    }

  return (
    <div className='my-10'>
      <h1 className='text-4xl font-medium my-5'>Upcoming Matchs</h1>
         <div className="flex justify-between">
          { data && data.data.map((match, index) => (<div key={match.id} className="bg-[rgba(39,39,39)] text-white p-5 rounded-sm w-[450px] border-1 border-gray-700">
        <div className="flex justify-between items-center">
        <h3 className='text-xm text-gray-100'>Tournamet Name</h3>
        <h4 className='text-sm text-gray-100'>{match.matchCategory}</h4>
        </div>
        <div className='flex justify-between items-center mt-5 mx-4'>
        <img  src={logo} alt="firstTeam" className='W-10 h-10 ' />
        <h3 className='text-xm text-gray-200'>{match.matchDate}</h3>
        <img src={logo} alt="secondTeam" className='W-10 h-10 ' />
        </div>
        <div className='flex justify-between items-center mt-2 px-1 mx-4'>
          <h2 className='text-lg w-8'>WCL</h2>  {/* This is a placeholder for the firsr team short name */}
          <h2 className='text-lg'>{match.matchTime}</h2>
         <h2 className='text-lg w-8'>BPL</h2>     {/* This is a placeholder for the second team short name */}
        </div>
        
      </div>
      ))}
     </div>
    </div>
  )
}

export default Upcoming
