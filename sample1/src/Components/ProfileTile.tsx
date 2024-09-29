import React from 'react'
import { UserList, UserProp } from '../Redux/UserReducer/UserProp'

const ProfileTile: React.FC<UserProp> = ({ _id, fname, lname, email, address, contact }) => {
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
          <button className='bg-red-500 text-white px-3 py-1 text-sm rounded-lg items-center hover:bg-red-700'>Delete</button>
        </div>
        <div>
          <button className='bg-green-500 text-white px-5 py-1 text-sm rounded-lg hover:bg-green-700'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileTile
