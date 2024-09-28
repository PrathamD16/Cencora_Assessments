import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const nav = useNavigate()

  const clickHandler = () => {
    nav("/createContact")
  }

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
