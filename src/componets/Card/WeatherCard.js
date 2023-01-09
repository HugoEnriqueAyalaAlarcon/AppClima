import { SiGooglemaps } from 'react-icons/si'; //icono puntero ubicacio del maps
import { FaCloudSun , FaSun } from 'react-icons/fa';
import { BsFillCloudFogFill } from 'react-icons/bs';


import React, { useEffect, useState } from "react";
import rascaImg from "./img/Rascacielos.jpg"
import "./style/CardWeather.css"
import { icons } from 'react-icons';

const Weathercard = ({tempInfo}) => { //Recibimos los datos  en temoInmfo 

const { 
    temp, 
    weathermood, 
    name,
    country, 
    sunset,
} = tempInfo; //desctruturamos para poder usar las variables

const [weatherIcon, SetWeatherIcon] = useState(""); //useState para controlas el icono
let icon;

if (weathermood) {
    switch (weathermood) {
        case "Clouds":
            icon=<FaCloudSun/>
            break;
        case "Haze":
            icon=<BsFillCloudFogFill/>
            break;
        case "Clear":
            icon=<FaSun/>
            break;
        case "Mist":
            icon=<FaCloudSun/>
            break;
            default:
            icon=<FaCloudSun/>
            break;
    }
}
    return (
        <div className="WeatherCard">
            <article className='CardInfo'>
                <div className="place">
                    <SiGooglemaps /> {name},  <b>{country}</b> 
                    <br/>
                    <div className="date" >
                        {new Date().toLocaleDateString()}
                    </div>
                    <div className="temperature">
                        <span>Temperatura {temp}&deg;</span>
                    </div>
                    <div className="weatherCondition">
                        {icon}{" "}
                        {weathermood} 
                    </div>
                </div>               
            </article>

        </div>
    )
};

export default Weathercard