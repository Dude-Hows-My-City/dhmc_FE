import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CityCard = ({
  city,
  findCity,
  compareCity,
  selectedCities,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(true);
    compareCity(e.target.id);
  };

  return (
    <StyledCityCard>
      <div data-cy="city-card" className="city-card-container" key={city.id}>
        <button data-cy="favorite-button" className="favorite-button">
          ⭐️
        </button>

        <NavLink
          to={`/info/${city.attributes.name}`}
          style={{ textDecoration: "none" }}
          onClick={() => findCity(city.attributes.name)}
        >
          <img
            className="city-image"
            data-cy="city-image"
            src={city.attributes.details.image_web_url}
            alt={`${city.attributes.name}'s skyline`}
          ></img>

          <p data-cy="city-name" className="image-label">
            {" "}
            {city.attributes.name}{" "}
          </p>
        </NavLink>

        {!selectedCities ||
          (selectedCities.length < 2 && (
            <div className="checkbox">
              <label>
                <input
                  id={city.attributes.name}
                  type="checkbox"
                  data-cy="checkbox"
                  checked={checked}
                  onChange={(e) => handleChange(e)}
                />
                Compare
              </label>
            </div>
          ))}
      </div>
    </StyledCityCard>
  );
};

export default CityCard;
