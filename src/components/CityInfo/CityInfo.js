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
          {/* <p>I'm a freaking CityInfo component!!!!</p>
          <p>{city.attributes.name}</p> */}
          <h2>{city.attributes.name}</h2>
          <img src={city.attributes.details.image_mobile_url} />
          <Quality city={city} />
        </div>
      </div>
    </>
  );
};
// housing: 3.05,
// cost_of_living: 3.82,
// startups: 7.97,
// venture_capital: 6.11,
// travel_connectivity: 8.32,
// commute: 6.12,
// business_freedom: 8.84,
// safety: 8.5,
// health_care: 8.9,
// education: 6.18,
// environmental_quality: 7.6,
// economy: 5.05,
// taxation: 4.95,
// internet_access: 4.52,
// leisure_and_culture: 8.87,
// tolerance: 8.37,
// outdoors: 5.31,
// teleport_city_score: 69.6
// },
