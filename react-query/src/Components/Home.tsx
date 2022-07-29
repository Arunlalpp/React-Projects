import React from 'react'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-center h-full'>
    <Link to='/help' className='text-blue-800'>Fetch Data</Link>
    </div>
  )
}

export default Home