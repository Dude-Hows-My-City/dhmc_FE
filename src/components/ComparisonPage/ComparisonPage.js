import { useState, useEffect } from "react";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/index";
import { StyledCityInfo } from "../styles/CityInfo.styled";

export const ComparisonPage = ({city1, city2, cityData1, cityData2}) => {

  return (

    <StyledCityInfo>
      <h1>I'm a comparison page!!!</h1>
    <div data-cy="city-info-container" className="city-info-container">
      <div data-cy="city-info-name-wrapper" className="city-name">
        <h2 data-cy="city-info-name">{city1.attributes.name}</h2>
        <img data-cy="city-info-image" src={city1.attributes.details.image_mobile_url} />
        <Quality city1={city1} />
        <Housing city1={city1} />
      </div>
    </div>
  </StyledCityInfo>
  )

}