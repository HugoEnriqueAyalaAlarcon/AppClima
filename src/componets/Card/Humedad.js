import React from 'react'
import {WiHumidity} from "react-icons/wi"

function Humedad({tempInfo}) {
    const {
    humidity,
    } = tempInfo;
  return (
    <div className='info'>
      <p >
        <WiHumidity className="iconCard"/> <br></br>
        Humedad <br></br>
        {humidity}
      </p>
    </div>
  )
}

export default Humedad