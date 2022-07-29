import React from 'react'
import useGetData from '../Api/useGetData'
import Button from './Button'

function Help():JSX.Element {

  const {data: userDetails=[]} = useGetData();
  return (
    <div className='text-center p-6'>
      <div className='text-green-700'>
        <span className='text-black text-2xl font-semibold'>user Details</span>
        <div className=''>
          {userDetails.map((userDetail) =>(
            <><span>{userDetail.id}</span><h2>{userDetail.title}</h2><h4>{userDetail.body}</h4></>
          ))}
        </div>
      </div>
      <div className='py-8'>
        <Button />
      </div>
    </div>
  )
}

export default Help
