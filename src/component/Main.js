import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const logpath1 = useNavigate();
  return (
    <div>
      <div className="title">
        WELCOME
        <button class="logout-button" onClick={()=>logpath1("/login")}>logout</button>
      </div>
      
    </div>
  )
}

export default Main
