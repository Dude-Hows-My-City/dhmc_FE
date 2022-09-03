import { useState, useEffect } from "react";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/HousingIndex";
import { StyledCityInfo } from "../styles/CityInfo.styled";
import { CityInfo } from "../CityInfo/CityInfo";

export const ComparisonPage = ({
  city,
  city1,
  city2,
  cityData1,
  cityData2,
}) => {
  console.log("city1 in comparison", city1);
  console.log("city1 in comparison", city1);
  console.log("cityDaata1 in comparison", cityData1);
  console.log("cityDaata1 in comparison", cityData2);
  return (
    // <CityInfo  city={city1} cityData={cityData1}/>
    
    <StyledCityInfo>
    <div data-cy="city-info-container" className="city-info-container">
      <div data-cy="city-info-name-wrapper" className="city-name">
        <h2 data-cy="city-info-name">{city1.attributes.name}</h2>
        <img
          data-cy="city-info-image"
          src={city1.attributes.details.image_mobile_url}
        />
        <Quality city={city1} />
        <Housing city={city1} />
      </div>
    </div>
    <div data-cy="city-info-container" className="city-info-container">
      <div data-cy="city-info-name-wrapper" className="city-name">
        <h2 data-cy="city-info-name">{city1.attributes.name}</h2>
        <img
          data-cy="city-info-image"
          src={city1.attributes.details.image_mobile_url}
        />
        <Quality city={city1} />
        <Housing city={city1} />
      </div>
    </div>
     </StyledCityInfo>
    // {/* <CityInfo  city={city1} cityData={cityData2}/> */}
  );
};
