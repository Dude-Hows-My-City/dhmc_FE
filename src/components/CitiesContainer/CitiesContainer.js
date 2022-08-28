import React from "react";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom";

const CitiesContainer = ({cities, filteredNames}) => {

  let variable;

if(cities) {
  variable = cities
} else {
  variable = filteredNames
}

let cityMap = variable.map(city => {
  return (
    <NavLink 
    to={`/info/${city.name}`}
    key={city.name}
    style={{textDecoration: 'none'}}
    >
    <CityCard 
    city={city}
    />
    </NavLink>
  )
})
  
  return (
    <>
    {cityMap}
    </>
  
  )
  
}


export default CitiesContainer;