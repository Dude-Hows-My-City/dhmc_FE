import { useState, useEffect } from "react";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/index";
import { StyledCityInfo } from "../styles/CityInfo.styled";
// import { CityInfo } from "../CityInfo/CityInfo";

export const ComparisonPage = ({city, city1, city2, cityData1, cityData2}) => {

  console.log('city1 in comparison', city1)
  return (

    <StyledCityInfo>
      <CityInfo  city={city1} cityData={cityData1}/>
      {/* <CityInfo  city={city2} cityData={cityData2}/> */}
  </StyledCityInfo>
  )

}