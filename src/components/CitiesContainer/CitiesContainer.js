import React from "react";
import CityCard from "../CityCard/CityCard";

const CitiesContainer = ({cities}) => {

let cityMap = cities.map(city => {
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