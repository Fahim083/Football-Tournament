import React from 'react'
import Team from '../Components/Team'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loading from '../Components/Loading'
import Standing from '../Components/Standing'

const TeamsPage = () => {
  const {data,isLoading} = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      return await axios.get("http://0.0.0.0:4000/teams")
    },
    staleTime: 1000 * 60 * 20, // 20 minutes
  })
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <h2 className='text-4xl font-medium mx-5 my-6'>Team Standing</h2>
        <div>
        <Standing />
        </div>
      </div>
      <div className='mx-5'>
        <h2 className='text-4xl font-medium my-6'>Meet the teams</h2>
        <div className='grid grid-cols-3 gap-4 mt-6 mb-14'>
          {data && data.data.map((team, index) => (
            <Team key={team.id} teamName={team.teamName} teamLogo={team.teamLogo} teamColor={team.teamColor}  />
          ))}
          
        </div>
      </div>

    </div>
  )
}

export default TeamsPage
