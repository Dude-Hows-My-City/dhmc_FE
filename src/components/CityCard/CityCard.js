import React from "react";
import { NavLink } from "react-router-dom";


const CityCard = ({city}) => {


  return(


      <>
      <div className="city-card-container">
      
      <h1>{city.name}</h1>
      <img src={city.details.image_web_url}></img>
      </div>
      
      </>
    
  )
}


export default CityCard;