import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/HousingIndex";
import { StyledCityInfo } from "../styles/CityInfo.styled";

export const CityInfo = ({ testedCity, testedCity1, testedCity0, city1, cityName, setCity, cities, setCities, selectedCities }) => {
  
  // const [newCity, setNewCity] = useState({})
  
  useEffect(() => {
    // let cityId = cities.find((locale) => locale.attributes.name === cityName);
  //  let city = Object.keys(testedCity).length !== 0 ? testedCity : selectedCities[0]
  // if (Object.keys({...testedCity}).length !== 0 || undefined) {
  //   setNewCity({...testedCity}) 
  // } if (Object.keys({...testedCity0}).length !== 0 || undefined) {
  //   setNewCity({...testedCity0})
  // } if (Object.keys({...testedCity1}).length !== 0 || undefined) {
  //   setNewCity({...testedCity1}) 
  // }
  // setNewCity(testedCity)
  // console.log('cityInfo newCity UE', newCity)
  console.log('cityInfo testedCity UE', testedCity)

  // }
  // Object.keys(selectedCities[0]).length !== 0 && setNewCity(selectedCities[0]) 
  // Object.keys(selectedCities[1]).length !== 0 && setNewCity(selectedCities[1]) 


  // : setNewCity(selectedCities[0]) || setNewCity(selectedCities[1])
    // getCity(cityId.id).then((data) => setCity(data.data));
  }, [testedCity, selectedCities, testedCity0, testedCity1]);

  // console.log('cityInfo newCity AR', newCity)
  console.log('testedCity city AR', testedCity)
  // console.log('testedCity1 city AR', testedCity1)
  // console.log('testedCity0 city AR', testedCity0)
  // console.log('cityInfo city AR', selectedCities)

  
  return (
    <> 
    { testedCity !== undefined &&

(<StyledCityInfo>
      <div data-cy="city-info-container" className="city-info-container">
        <div data-cy="city-info-name-wrapper" className="city-name">
          <h2 data-cy="city-info-name">{testedCity.attributes.name}</h2>
          <img data-cy="city-info-image" src={testedCity.attributes.details.image_mobile_url} />
          <Quality city={testedCity} />
          <Housing city={testedCity} />
        </div>
      </div>
     
    </StyledCityInfo>)
   } 
    </>
  );
};
