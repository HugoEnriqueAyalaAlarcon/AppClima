import React from 'react'
import {WiStrongWind} from "react-icons/wi"


export default function Velocidad({tempInfo}) {
    const {
        speed,
        } = tempInfo;
    return (
        <div className='info'>
        <p>
            <WiStrongWind className="iconCard"/> <br></br>
            Vientos  <br></br>
            {speed}
        </p>
    </div>
  )
}
