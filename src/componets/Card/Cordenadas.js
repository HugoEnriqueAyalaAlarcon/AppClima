import React from 'react'
import {TbMapSearch} from "react-icons/tb"

function Cordenadas({tempInfo}) {
    const {
      lon,
      lat
    } = tempInfo;
  return (
    <div className='info'>
      <p>
        <TbMapSearch className="iconCard"/> <br/>
        Longitud <br></br>
        {lon}<br></br>
        Latitud <br></br>
        {lat}
      </p>
    </div>
  )
}

export default Cordenadas