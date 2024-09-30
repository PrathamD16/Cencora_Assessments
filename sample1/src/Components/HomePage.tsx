import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserList, UserProp } from '../Redux/UserReducer/UserProp'
import { RootState } from '../Redux/store'
import { useSelector } from 'react-redux'
import ProfileTile from './ProfileTile'

const HomePage = () => {
  const nav = useNavigate()

  const res = useSelector((state: RootState) => state.userreducer.users)

  const clickHandler = () => {
    nav("/createContact")
  }

  useEffect(() => {
    // console.log(res)
  }, [res])

  return (
    <div className='p-[1rem] bg-slate-100 shadow-md mx-10 my-5'>
      <div className='flex sticky top-0'>
        <button onClick={clickHandler} className='flex-1 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-900'>Click to Add</button>
      </div>
      {/* Using Map  */}
      <div className='my-10'>
        {
          res.map((x: UserProp, _i: number) => {
            return (
              <div className='my-3 hover:scale-[102%]' key={_i}>
                <ProfileTile _id={_i} fname={x.fname} lname={x.lname} address={x.address} contact={x.contact} email={x.email} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HomePage
