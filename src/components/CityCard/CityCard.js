import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom"

const CityCard = ({ city, findCity }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    // e.preventDefault();
    setChecked(true);
    console.log("Ive been checked");
  };

  console.log('checked state city card', checked)
  return (
    <StyledCityCard>

      <div
        data-cy="city-card"
        className="city-card-container"
        key={city.id}

      >
        <button data-cy="favorite-button" className="favorite-button">
          ⭐️
        </button>
        <NavLink
        to={`/info/${city.attributes.name}`}
        style={{ textDecoration: "none" }}
      >
        <img
          className="city-image"
          data-cy="city-image"
          src={city.attributes.details.image_web_url}
          alt={`${city.attributes.name}'s skyline`}
        onClick={() => findCity(city.attributes.name)}

        ></img>
      </NavLink>

        <p data-cy="city-name" className="image-label">
          {" "}
          {city.attributes.name}{" "}
        </p>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => handleChange(e)}
            />
            Compare
          </label>
        </div>
      </div>
    </StyledCityCard>
  );
};

export default CityCard;
