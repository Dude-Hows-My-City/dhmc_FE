import { useState, useEffect } from "react";
import { StyledSelectedToCompare } from "../styles/SelectedToCompare.styled";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom";

export const SelectedToCompare = ({
  cities,
  city1,
  city2,
  findCity,
  compareCity,
  deleteCompared
}) => {
  console.log("city1 in Selected", city1);
  console.log("city1 in Selected", city2);
  console.log("selectedCitties in Selected", cities);
  console.log("city1 keys length in Selected", Object.keys(city1).length);

  useEffect(() => {}, [city1, city2, cities]);

  const onSubmit = (e) => {
   deleteCompared(e.target.value);
  };

  let cityMap = cities.map((city) => {
    return (
      <div className="comparison-card-container">
        <CityCard
          city={city}
          city1={city1}
          city2={city2}
          findCity={findCity}
          compareCity={compareCity}
          key={city.id}
        />
        <button
          onClick={(e) => onSubmit(e)}
          value={`${city.id}`}
          className="button-delete"
        >
          Remove From Comparison
        </button>
      </div>
    );
  });
  console.log();
  return (
    <StyledSelectedToCompare>
      <div className="selected-to-compare-container">
        {cities.length === 0 ? (
          <p>Please Select Some Cities to Compare!</p>
        ) : (
          <div className="selected-container">
            <p>Your Selected Cities</p>
            {cityMap}
            {cities.length === 1 ? (
              <p>Nice! Now Select One More to Compare</p>
            ) : cities.length === 2 ? (
              <p></p>
            ) : (
              <p></p>
            )}
            <NavLink to={`/comparison`} style={{ textDecoration: "none" }}>
              <button disabled={cities.length !== 2} className="button-compare">
                Let's Do This!
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </StyledSelectedToCompare>
  );
};
