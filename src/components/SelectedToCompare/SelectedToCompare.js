import { useEffect } from "react";
import { StyledSelectedToCompare } from "../styles/SelectedToCompare.styled";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom";

export const SelectedToCompare = ({
  cities,
  findCity,
  compareCity,
  deleteCompared,
  findFavCity,
  favorites,
}) => {
  useEffect(() => {}, [cities]);

  const onSubmit = (e) => {
    deleteCompared(e.target.value);
  };

  let cityMap = cities.map((city) => {
    return (
      <div className="comparison-card-container" key={city.id}>
        <CityCard
          city={city}
          findCity={findCity}
          compareCity={compareCity}
          findFavCity={findFavCity}
          favorites={favorites}
        />
        <button
          onClick={(e) => onSubmit(e)}
          value={`${city.id}`}
          className="button-delete"
          data-cy="delete-button"
        >
          Remove From Comparison
        </button>
      </div>
    );
  });
  return (
    <StyledSelectedToCompare>
      <div className="selected-to-compare-container">
        <div className="selected-container">
          {cityMap}
          {cities.length === 1 ? (
            <p>Nice! Now Select One More to Compare</p>
          ) : cities.length === 2 ? (
            <p></p>
          ) : (
            <p></p>
          )}
          <NavLink to={`/comparison`} style={{ textDecoration: "none" }}>
            <button
              disabled={cities.length !== 2}
              className="button-compare"
              data-cy="compare-button"
            >
              Compare!
            </button>
          </NavLink>
        </div>
      </div>
    </StyledSelectedToCompare>
  );
};
