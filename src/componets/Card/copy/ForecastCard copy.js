import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {useState , useEffect} from "react"
import SearchCity from '../../SearchCity/SearchCity';

export default function ForecastCard({loc = "mexico"}) {

  //let url = `https://api.openweathermap.org/data/3.0/weather?q=${ciudadSeleccionado}&lang=es&units=metric&appid=b81d1235add18150329af82740e85f64`
  const [forecast , setForecast] = useState ([]);
  const [loading , setLoading] = useState (false);
  const [show , setShow] = useState (false);
  const [location , setLocation] = useState ("");
  
  const getLocation = async(loc) =>{
      setLoading (true);//visualizar spiner
      setLocation(loc);//pasarle ciudad
      
      let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&lang=es&units=metric&appid=b81d1235add18150329af82740e85f64`
      //pasar loc
      await fetch (urlForecast)
      .then((response) =>{
        return response.json();
      })
      .then((dataHoras) =>{
        setForecast(dataHoras);
      })
  }
  
    return (
    <div className='container border border-dark bg-info'> 
        ForecastCard {loc}
    </div>
  )
}
