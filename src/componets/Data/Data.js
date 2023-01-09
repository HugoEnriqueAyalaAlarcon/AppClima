import React, { useEffect, useState } from "react";
import WeatherCard from '../Card/WeatherCard'
import Temperatura from '../Card/Temperatura';
import Pronostico from '../Card/Pronostico';
import Humedad from '../Card/Humedad';
import Velocidad from '../Card/Velocidad';
import Noche from '../Card/Noche';
import Dia from '../Card/Dia';
import Cordenadas from '../Card/Cordenadas';

import "bootstrap/dist/css/bootstrap.css"
import "../Card/style/CardInfo.css"



const Data = ({ciudadSeleccionado = "mexico" }) => {
  const [tempInfo, setTempInfo] = useState({});//mandamos tempInfo a WeatherCard
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadSeleccionado}&units=metric&appid=b81d1235add18150329af82740e85f64`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, temp_max, temp_min, humidity, pressure  } = data.main;
      const { main: weathermood , description:  description} = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise ,sunset } = data.sys;
      const { lon , lat } = data.coord;
      const myNewWeatherInfo = {
        temp,temp_max, temp_min,  //temperatura /nin/max
        humidity, //humedad
        pressure,
        weathermood,
        description, //description del clima
        name,
        speed,
        country,
        sunrise, //hora del amanecer
        sunset,  //hora del atardecer
        lon , lat //cordenadas /lon / lat
      };
      console.log(myNewWeatherInfo);
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
      alert("Ciudad no encontrada, intenta con otra");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <button
            className="searchButton btn btn-primary"
            type="button"
            onClick={getWeatherInfo}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className='container w-100 container-Card p-0'>
          <WeatherCard tempInfo={tempInfo} />
          <hr />
        <div className='containerInfo'>
          <Temperatura  tempInfo={tempInfo}/>
          <Cordenadas  tempInfo={tempInfo}/>
          <Humedad  tempInfo={tempInfo}/>
          <Velocidad  tempInfo={tempInfo}/>
          <Pronostico  tempInfo={tempInfo}/>
          <Noche  tempInfo={tempInfo}/>
          <Dia  tempInfo={tempInfo}/>
        </div>
      </div>
    </>
  );
};

export default Data;
