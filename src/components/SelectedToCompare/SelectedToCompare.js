import { useState, useEffect } from "react";
import { StyledSelectedToCompare } from "../styles/SelectedToCompare.styled";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom"


export const SelectedToCompare = ({ city1, city2 }) => {
  console.log("city1 in Selected", city1);
  console.log("city1 in Selected", city2);

  return (
    <>
     { Object.keys(city1).length !== 0 || Object.keys(city2).length !== 0 &&
    <StyledSelectedToCompare>


    <h1>I'm selected to compare</h1>
    
     <CityCard city1={city1}/>
    <CityCard city2={city2}/>
    <NavLink
        to={`/comparison`}
        style={{ textDecoration: "none" }}
      >
        <button className="button-compare">Compare Selected</button>
      </NavLink>
    </StyledSelectedToCompare>
}
    </>


  );
};
