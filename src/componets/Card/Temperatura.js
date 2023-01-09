import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {RiTempHotFill} from "react-icons/ri"

function Temperatura({tempInfo}) {
    const { 
        temp,
        temp_min,
        temp_max,
    } = tempInfo; 

  return (
    <div className='info'>
      <p>
        <RiTempHotFill className="iconCard"/>
        temperatura_minima<br></br>
        {temp_min}<br></br>
        temperatura_maxima<br></br>
        {temp_max}<br></br>
      </p>
    </div>
  )
}

export default Temperatura