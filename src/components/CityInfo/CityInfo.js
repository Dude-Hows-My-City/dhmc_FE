import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";

export const CityInfo = ({ city, cityName, setCity, cities, setCities }) => {

  useEffect(() => {
    let cityId = cities.find(locale => locale.attributes.name === cityName)

    getCity(cityId.id)
      .then(data => setCity(data.data))
  },[])
  
  return (
    <>
      <div className="city-info-container">
        <div className="city-name">
          <p>I'm a freaking CityInfo component!!!!</p>
          <p>{city.attributes.name}</p>
        </div>
      </div>
    </>
  );
};
