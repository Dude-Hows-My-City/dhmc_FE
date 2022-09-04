import { useState, useEffect } from "react";
import { StyledSelectedToCompare } from "../styles/SelectedToCompare.styled";
import CityCard from "../CityCard/CityCard";
import { NavLink } from "react-router-dom"


export const SelectedToCompare = ({cities, city1, city2, findCity, compareCity }) => {
  console.log("city1 in Selected", city1);
  console.log("city1 in Selected", city2);
  console.log("selectedCitties in Selected", cities);
  console.log("city1 keys length in Selected", Object.keys(city1).length);

  useEffect(() => {


  }, [city1, city2, cities])


  let cityMap = cities.map((city) => {
    return (
   
        // <CityCard city={city}
        <CityCard city={city} city1={city1} city2={city2} findCity={findCity} compareCity={compareCity}
        key={city.id}
        />

    );
  });

  return (

    
    <>
      
    {cities.length === 0 ?
    <p>Select Some Cities to Compare!</p>
    : 
      <div className="selected-container">
      <p>Your Selected Cities</p>
      {cityMap}
      {cities.length === 1 ?
      <p>Please Select One More to Compare</p>
      : 
      cities.length === 2 ? <p>Let's Do this!</p>
      :
      <p>You Have Too Many, Try Removing Some!</p>
      }
      <NavLink
      to={`/comparison`}
      style={{ textDecoration: "none" }}
      >
      <button  disabled={cities.length !== 2} className="button-compare">Compare Selected</button>
      </NavLink>
      </div>
    }
      </>
      )
    };
