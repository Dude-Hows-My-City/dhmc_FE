import React from "react";
import CityCard from "../CityCard/CityCard";
// import { NavLink } from "react-router-dom";

const CitiesContainer = ({ cities, filteredNames, findCity, compareCity, city1, city2, selectedCities }) => {
  let searchItem;

  if (cities) {
    searchItem = cities;
  } else {
    searchItem = filteredNames;
  }

  let cityMap = searchItem.map((city) => {
    return (
   
        <CityCard selectedCities={selectedCities} city={city} city1={city1} city2={city2} findCity={findCity} compareCity={compareCity}
        key={city.id}
        />

    );
  });

  return <>{cityMap}</>;
};

export default CitiesContainer;
