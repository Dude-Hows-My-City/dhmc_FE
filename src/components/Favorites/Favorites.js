import React, { useState, useEffect } from "react";
import CityCard from "../CityCard/CityCard";
// import { NavLink } from "react-router-dom";

export const Favorites = ({
  cities,
  filteredNames,
  findCity,
  compareCity,
  selectedCities,
  favorites,
  query
}) => {

  useEffect(() => {}, [cities, filteredNames, query, favorites]);
  
  let cityMap = favorites.map((city) => {
    return (
      <CityCard
        selectedCities={selectedCities}
        city={city}
        findCity={findCity}
        compareCity={compareCity}
        key={city.id}
      />
    );
  });


  return (

    <section>

    <h1>I'm your favorite!</h1>
    {cityMap}
    </section>
  )
};
