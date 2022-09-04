import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom"

const CityCard = ({ city, findCity, compareCity, city1, city2, cityData1, cityData2 }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    // e.preventDefault();
    setChecked(true);
    console.log("Ive been checked");
    console.log("checkbox e value", e);
    console.log(e.target.id)
    compareCity(e.target.id)

  };

  console.log('checked state city card', checked)
  // console.log('city from city card', city)
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
        onClick={() => findCity(city.attributes.name)}
      >
        <img
          className="city-image"
          data-cy="city-image"
          src={city.attributes.details.image_web_url}
          alt={`${city.attributes.name}'s skyline`}
        ></img>

        <p data-cy="city-name" className="image-label"
        >
          {" "}
          {city.attributes.name}{" "}
        </p>
      </NavLink>

        

      
        <div className="checkbox">
          <label>
            <input
              id={city.attributes.name}
              // name={city.attributes.name}
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
