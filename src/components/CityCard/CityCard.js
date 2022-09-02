import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";

const CityCard = ({ city, findCity }) => {
  return (
    <StyledCityCard>
      <div onClick={() => findCity(city.attributes.name)} data-cy="city-card" className="city-card-container">
        <button data-cy="favorite-button" className="favorite-button">⭐️</button>
        <img
          className="city-image"
          data-cy="city-image"
          src={city.attributes.details.image_web_url}
          alt={`${city.attributes.name}'s skyline`}
        ></img>
        <p data-cy="city-name" className="image-label"> {city.attributes.name} </p>
        {/* <button className="select-city-button"></button> */}
      </div>
    </StyledCityCard>
  );
};

export default CityCard;
