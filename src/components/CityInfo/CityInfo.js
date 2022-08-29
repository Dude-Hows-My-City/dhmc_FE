import { useState } from "react";

export const CityInfo = ({ city }) => {
  console.log(city.scores.housing);
  return (
    <>
      <div className="city-info-container">
        <div className="city-name">
          <p>I'm a freaking CityInfo component!!!!</p>
          <p>{city.name}</p>
        </div>
      </div>
    </>
  );
};
