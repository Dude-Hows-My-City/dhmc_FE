import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";
import Quality from "../Quality/index";
import Housing from "../Housing/index";
import { StyledCityInfo } from "../styles/CityInfo.styled";

export const CityInfo = ({ city, cityName, setCity, cities, setCities }) => {
  useEffect(() => {
    let cityId = cities.find((locale) => locale.attributes.name === cityName);

    getCity(cityId.id).then((data) => setCity(data.data));
  }, []);

  return (
    <StyledCityInfo>
      <div className="city-info-container">
        <div className="city-name">
          <h2>{city.attributes.name}</h2>
          <img src={city.attributes.details.image_mobile_url} />
          <Quality city={city} />
          <Housing city={city} />
        </div>
      </div>
    </StyledCityInfo>
  );
};
