import React, { useState, useEffect } from "react";
import CityCard from "../CityCard/CityCard";
// import { NavLink } from "react-router-dom";
import { StyledCityCardTest } from "../styles/CityCard.styledTest";


export const Favorites = ({
  cities,
  filteredNames,
  findCity,
  compareCity,
  selectedCities,
  favorites,
  query,
  removeFavorite

}) => {

  useEffect(() => {}, [cities, filteredNames, query, favorites]);
  
  let cityMap = favorites.map((city) => {
    return (
      <StyledCityCardTest>
      <CityCard
        selectedCities={selectedCities}
        city={city}
        findCity={findCity}
        compareCity={compareCity}
        key={city.id}
        removeFavorite={removeFavorite}

      />
      </ StyledCityCardTest>

    );
  });


  return (

    <section>

    {cityMap}
    </section>
  )
};
