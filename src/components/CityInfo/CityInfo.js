import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";
import Quality from "../Quality/index";

export const CityInfo = ({ city, cityName, setCity, cities, setCities }) => {
  useEffect(() => {
    let cityId = cities.find((locale) => locale.attributes.name === cityName);

    getCity(cityId.id).then((data) => setCity(data.data));
  }, []);

  return (
    <>
      <div className="city-info-container">
        <div className="city-name">
          <h2>{city.attributes.name}</h2>
          <img src={city.attributes.details.image_mobile_url} />
          <Quality city={city} />
        </div>
      </div>
    </>
  );
};
