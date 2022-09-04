import { useState, useEffect } from "react";
import { StyledSelectedToCompare } from "../styles/SelectedToCompare.styled";
import CityCard from "../CityCard/CityCard";

export const SelectedToCompare = ({ city1, city2 }) => {
  console.log("city1 in Selected", city1);
  console.log("city1 in Selected", city2);

  return (
    <>
     { Object.keys(city1).length !== 0 &&
    <StyledSelectedToCompare>
    <h1>I'm selected to compare</h1>
    
     <CityCard city1={city1}/>
    {/* <CityCard city2={city2}/>  */}
    </StyledSelectedToCompare>
}
    </>


  );
};
