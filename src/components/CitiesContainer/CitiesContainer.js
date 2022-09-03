import React from "react";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom";

const CitiesContainer = ({ cities, filteredNames, findCity }) => {
  let searchItem;

  if (cities) {
    searchItem = cities;
  } else {
    searchItem = filteredNames;
  }

  let cityMap = searchItem.map((city) => {
    return (
   
        <CityCard city={city} findCity={findCity} 
        key={city.id}
        />

    );
  });

  return <>{cityMap}</>;
};

export default CitiesContainer;
