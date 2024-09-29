import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserList, UserProp } from '../Redux/UserReducer/UserProp'
import { RootState } from '../Redux/store'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const nav = useNavigate()

  const res = useSelector((state: RootState) => state.userreducer.users)

  const clickHandler = () => {
    nav("/createContact")
  }

  useEffect(() => {
    console.log(res)
  }, [res])

  return (
    <div className='p-[1rem] bg-slate-100 shadow-md mx-10 my-5'>
      <div className='flex'>
        <button onClick={clickHandler} className='flex-1 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-900'>Click to Add</button>
      </div>
      {/* Using Map  */}
      <div className='my-10'>
        <h2>Display all list</h2>
      </div>
    </div>
  )
}

export default HomePage
