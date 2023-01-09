import React from 'react'
import { GiSunrise } from 'react-icons/gi';

function dia({tempInfo}) {
    const {
        sunrise,
    } = tempInfo;
    const amanecer=new Date(sunrise * 1000); 
    const options = {hour: 'numeric', minute: 'numeric', hour12: true}; 
    const horaAmanecer = amanecer.toLocaleString('en-US', options);
  return (
    <div className='info'>
      <p>
        <GiSunrise className="iconCard"/> <br></br>
        {horaAmanecer}
      </p>
    </div>
  )
}

export default dia