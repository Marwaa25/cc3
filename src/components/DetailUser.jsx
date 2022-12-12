import React from 'react'
import { useSelector } from 'react-redux'

export default function DetailsUsers() {

  const Selecteduser = useSelector(state => state.user.selectedUser);
  const user = useSelector(state => state.user.data).filter(item => item.name.common === Selecteduser);

  return (
    <div>
      {user.length !== 0 &&
        <div>
          <div className='image'>
            <img src={user.image} alt="Profile Picture" />
          </div>
          <div className='detailSection'>
            <label>Full Name: </label>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </div>
          <div className='detailSection'>
            <label>Age: </label>
            <span>{user.age}</span>
          </div>
        </div>
      }
    </div>
  )
}
