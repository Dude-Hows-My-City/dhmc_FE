import React from "react";
import CityCard from "../CityCard/CityCard";

const CitiesContainer = ({cities, filteredNames}) => {

  let variable;

if(cities) {
  variable = cities
} else {
  variable = filteredNames
}

let cityMap = variable.map(city => {
  return (
    <CityCard 
    city={city}
    key={city.name}
    />
  )
})
  
  return (
    <>
    {cityMap}
    </>
  
  )
  
}


export default CitiesContainer;