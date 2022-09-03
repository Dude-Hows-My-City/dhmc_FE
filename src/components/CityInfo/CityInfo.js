import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/index";
import { StyledCityInfo } from "../styles/CityInfo.styled";

export const CityInfo = ({ city, cityName, setCity, cities, setCities }) => {
  useEffect(() => {
    let cityId = cities.find((locale) => locale.attributes.name === cityName);

    getCity(cityId.id).then((data) => setCity(data.data));
  }, []);

  return (
    <StyledCityInfo>
      <div data-cy="city-info-container" className="city-info-container">
        <div data-cy="city-info-name-wrapper" className="city-name">
          <h2 data-cy="city-info-name">{city.attributes.name}</h2>
          <img data-cy="city-info-image" src={city.attributes.details.image_mobile_url} />
          <Quality city={city} />
          <Housing city={city} />
        </div>
      </div>
    </StyledCityInfo>
  );
};
