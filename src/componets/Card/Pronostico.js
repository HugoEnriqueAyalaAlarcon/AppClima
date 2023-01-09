import React from 'react'
import { FaCloudSun , FaSun } from 'react-icons/fa';
import { BsFillCloudFogFill } from 'react-icons/bs';


function Pronostico({tempInfo}) {
    const { 
        weathermood,
        description,
    } = tempInfo; 

let icono;
if (weathermood) {
    switch (weathermood) {
        case "Clouds":
            icono=<FaCloudSun/>
            break;
        case "Haze":
            icono=<BsFillCloudFogFill/>
            break;
        case "Clear":
            icono=<FaSun/>
            break;
        case "Mist":
            icono=<FaCloudSun/>
            break;
            default:
            icono=<FaCloudSun/>
            break;
    }
}
  return (
  <div className='info'>
    <p>
    <p className="iconCard">
        {icono }
    </p>
    {weathermood} <br></br>
    Pronostico<br></br>
    {description}<br></br>
    </p>
  </div>
  )
}

export default Pronostico