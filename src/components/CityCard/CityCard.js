import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";

const CityCard = ({ city, findCity }) => {
  console.log(city)
  return (
    <StyledCityCard>
      <div onClick={() => findCity(city.name)} className="city-card-container">
        <button className="favorite-button">⭐️</button>
        <img
          className="city-image"
          src={city.attributes.details.image_web_url}
          alt={`${city.attributes.name}'s skyline`}
        ></img>
        <p className="image-label"> {city.attributes.name} </p>
        {/* <button className="select-city-button"></button> */}
      </div>
    </StyledCityCard>
  );
};

export default CityCard;
