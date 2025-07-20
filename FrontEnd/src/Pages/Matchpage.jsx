import React from 'react'
import Result from "../Components/Result";

const Matchpage = () => {
  return (
    <>
    <h1 className='text-4xl font-semibold py-4 sticky top-20 z-50 bg-black'>Match Results</h1>
    <div className='flex flex-col gap-5 '>
      <Result />
      <Result />
      <Result />
      <Result />
    </div>
    </>
  )
}

export default Matchpage
