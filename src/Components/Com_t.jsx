import React, { useContext } from 'react'
import { userAuth } from '../App'

function Com_t() {
  const {setUserName}=useContext(userAuth);
  return (
    <div>
      <input type="text" placeholder='userName' onChange={(e)=>{
          setUserName(e.target.value)
      }} />
    </div>
  )
}

export default Com_t