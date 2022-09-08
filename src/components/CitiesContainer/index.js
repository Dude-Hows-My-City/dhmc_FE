import React, { useEffect } from "react";
import CityCard from "../CityCard/CityCard";

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
  citiesAlways,
}) => {
  useEffect(() => {}, []);

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
        favorites={favorites}
        cities={cities}
        citiesAlways={citiesAlways}
      />
    );
  });

  return <>{cityMap}</>;
};

export default CitiesContainer;
