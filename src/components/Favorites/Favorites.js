import React, { useEffect } from "react";
import CityCard from "../CityCard/CityCard";
import { StyledFavorites } from "../styles/Favorites.styled";
import { StyledAltFavorites } from "../styles/AltFavorites.styled";
import emptyBox from "../../images/empty-box.png";

export const Favorites = ({
  cities,
  filteredNames,
  findCity,
  compareCity,
  selectedCities,
  favorites,
  query,
  removeFavorite,
}) => {
  useEffect(() => {}, [cities, filteredNames, query, favorites]);

  const handleDelete = (e) => {
    e.preventDefault();
    removeFavorite(e.target.id);
  };

  let cityMap = favorites.map((city) => {
    return (
      <StyledAltFavorites>
        <CityCard
          selectedCities={selectedCities}
          city={city}
          findCity={findCity}
          compareCity={compareCity}
          favorites={favorites}
          key={city.id}
          removeFavorite={removeFavorite}
        />
        <button
          id={city.id}
          data-cy="delete-button"
          onClick={(e) => handleDelete(e)}
          className="delete-button"
        >
          DELETE
        </button>
      </StyledAltFavorites>
    );
  });

  return favorites.length >= 1 ? (
    <section>{cityMap}</section>
  ) : (
    <StyledFavorites>
      <h1>
        You have not added any cities to your favorites list. Return to the
        homepage to do so
      </h1>
      <img
        src={emptyBox}
        alt="Empty box to show no favorites have been added"
      />
    </StyledFavorites>
  );
};
