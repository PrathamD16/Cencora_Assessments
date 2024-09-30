import React from 'react'
import { UserList, UserProp } from '../Redux/UserReducer/UserProp'
import { deleteUser } from '../Redux/UserReducer/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProfileTile: React.FC<UserProp> = ({ _id, fname, lname, email, address, contact }) => {
  const dispatch = useDispatch()
  const nav = useNavigate()

  const deleteHandler = () => {
    dispatch(deleteUser(_id || NaN))
  }

  const editHandler = () => {
    nav(`/edit/${_id}`)
  }

  return (
    <div className='flex justify-between bg-white p-3 shadow-md rounded-md'>
      <div className='block'>
        <p><span className='font-semibold'>Name: </span>{fname} {lname}</p>
        <p><span className='font-semibold'>Email: </span>{email}</p>
        <p><span className='font-semibold'>Contact: </span>{contact}</p>
        <p className='font-semibold'>Address: </p>
        <div className='mx-5 text-sm'>
          <p className='font-bold'>{address.atype} address</p>
          <p>{address.details}</p>
        </div>
      </div>
      <div className='space-y-3 md:space-y-0 md:space-x-5 md:flex'>
        <div>
          <button onClick={deleteHandler} className='bg-red-500 text-white px-3 py-1 text-sm rounded-lg items-center hover:bg-red-700'>Delete</button>
        </div>
        <div>
          <button 
          onClick={editHandler}
          className='bg-green-500 text-white px-5 py-1 text-sm rounded-lg hover:bg-green-700'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileTile
