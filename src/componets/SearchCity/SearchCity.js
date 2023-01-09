import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Autosuggest from 'react-autosuggest';
import { useState , useEffect } from 'react';
import"./SearchCity.css"
import axios from 'axios';
import Data from '../Data/Data'


export default function SearchCity() {
  const[data, setData]= useState([]);
  const[ciudades, setCiudades]= useState([]);
  const[value, setValue]= useState("");
  const[ciudadSeleccionado, setCiudadSeleccionado]= useState([]);
  
  const onSuggestionsFetchRequested=({value})=>{
    setCiudades(filtrarCiudad(value));
  }
  
  const filtrarCiudad=(value)=>{
    const inputValue=value.trim().toLowerCase();
  const inputLength=inputValue.length;
  
    var filtrado=data.filter((ciudad)=>{
      var textoCompleto=ciudad.ciudad;
  
      if(textoCompleto.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(inputValue)){
        return ciudad;
      }
    });
  
    return inputLength===0 ? [] : filtrado;
  }
  
  const onSuggestionsClearRequested = () =>{
    setCiudades([]);
  }
  
  const getSuggestionValue=(suggestion)=>{
    return `${suggestion.ciudad}`;
  }
  
  const renderSuggestion=(suggestion)=>(
    <div className='sugerencia' onClick={()=>seleccionarCiudad(suggestion)}>
      {`${suggestion.ciudad}`}
    </div>
  );
  
  const seleccionarCiudad=(ciudad)=>{
    setCiudadSeleccionado(ciudad);
  }
  
  const onChange=(e, {newValue})=>{
    setValue(newValue);
  }
  
  const inputProps={
  placeholder:"Nombre de la ciudad ",
  value,
  onChange
  };
  
  const eventEnter=(e)=>{
  if(e.key == "Enter"){
    var split = e.target.value.split('-');
    var ciudad ={
     
      ciudad: split[0].trim(),
    };
    seleccionarCiudad(ciudad);
  }
}

const getData=()=>{
  axios.get("./bd/CiudadesBD.json")
  .then(repuesta =>{ //reespuesta exitosa
    //console.log(repuesta.data);
    setCiudades(repuesta.data);
    setData(repuesta.data);
  })
}
useEffect(()=>{ //ejecutamos al cargar la web
  getData (); //odtener data
},[])

  return (
    <div className='fondo'>
    <Autosuggest 
      suggestions={ciudades}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      onSuggestionSelected={eventEnter}
     />

     <br />
     <Data ciudadSeleccionado={ciudadSeleccionado.ciudad} />
    </div>
  );
}



