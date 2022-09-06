import React, { useEffect } from "react";
import CityCard from "../CityCard/CityCard";
// import { NavLink } from "react-router-dom";

const CitiesContainer = ({
  cities,
  filteredNames,
  findCity,
  compareCity,
  selectedCities,
  query,
  findFavCity,
  removeFavorite,
  favorites,
  checkedCitiesId,
}) => {
  useEffect(() => {}, [cities, filteredNames, query, favorites]);



  let searchItem;
  if (cities && !query) {
    searchItem = cities;
  } else {
    searchItem = filteredNames;
  }
  let cityMap = searchItem.map((city) => {
    return (
      <CityCard
        selectedCities={selectedCities}
        city={city}
        findCity={findCity}
        compareCity={compareCity}
        key={city.id}
        findFavCity={findFavCity}
        removeFavorite={removeFavorite}
        checkedCitiesId={checkedCitiesId}
      />
    );
  });

  return <>{cityMap}</>;
};

export default CitiesContainer;
