import React from 'react'
import {UserList, UserProp} from '../Redux/UserReducer/UserProp'

const ProfileTile: React.FC<UserProp> = ({_id, fname, lname, email, address, contact}) => {
  return (
    <div>
      <p>{_id}</p>
      <p>{fname} - {lname}</p>
      <p>{email}</p>
      <p>{address.atype}</p>
      <p>{address.details}</p>
      <p>{contact}</p>
    </div>
  )
}

export default ProfileTile
