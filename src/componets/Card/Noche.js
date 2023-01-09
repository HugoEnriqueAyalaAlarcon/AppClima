import React from 'react'
import { GiSunset } from 'react-icons/gi'

function Noche({tempInfo}) {
    const {
        sunset,// hora en formarto unix
    } = tempInfo;
    const atardeser=new Date(sunset * 1000); // Convertir el timestamp Unix a un objeto de fecha
    const options = {hour: 'numeric', minute: 'numeric', hour12: true}; // Opciones para el formato de 12 horas
    const horaAtardecer = atardeser.toLocaleString('en-US', options); // Convertir la fecha a una cadena con el formato especificado
  return (
    <div className='info'>
      <p>  
        <GiSunset className="iconCard"/> <br></br>
        {horaAtardecer}
      </p>
    </div>
  )
}

export default Noche