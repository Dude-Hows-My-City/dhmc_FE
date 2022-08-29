import { useState } from "react";

export const CityInfo = ({city}) => {



  return (
<>
    <div className="city-info-container">
      <div className="city-name">
        <p>I'm a freaking CityInfo component!!!!</p>
        <p>{city.name}</p>
      </div>

    </div>
</>
  )
}