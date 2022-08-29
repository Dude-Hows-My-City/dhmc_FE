import React from "react";
import { NavLink } from "react-router-dom";
import { StyledCityCard } from "../styles/CityCard.styled";

const CityCard = ({ city, findCity }) => {
  return (
    <StyledCityCard>
      <div onClick={() => findCity(city.name)} className="city-card-container">
        <img
          className="city-image"
          src={city.details.image_web_url}
          alt={`${city.name}'s skyline`}
        ></img>
        <p className="image-label"> {city.name} </p>
      </div>
    </StyledCityCard>
  );
};

//parent =   position: relative;
//child = position: absolute;

export default CityCard;
