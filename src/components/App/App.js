import { useEffect, useState } from "react";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header";
import { getCities, getCity } from "../../apiCalls";
import { ComparisonPage } from "../ComparisonPage/ComparisonPage";
import { SelectedToCompare } from "../SelectedToCompare/SelectedToCompare";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});
  const [city1, setCity1] = useState({});
  const [city2, setCity2] = useState({});
  const [cityData1, setCityData1] = useState({});
  const [cityData2, setCityData2] = useState({});
  const [selectedCities, setSelectedCities] = useState([])
  

  useEffect(() => {
    getCities()
    .then(data => setCities(data.data))
  }, [city, filteredNames, city1, city2, cityData2, selectedCities]);

  const filterNames = (query) => {
    setFilteredNames(cities.filter((city) => city.name.includes(query)));
  };

  const findCity = (cityName) => {
    console.log('findCity in app', cityName)
    let foundCity = cities.find((city) => city.attributes.name === cityName);
    setCity(foundCity);
  };

  const compareCity = (cityName) => {
   

      let foundCity = cities.find((city) => city.attributes.name === cityName);
      setCity1(foundCity)
      setSelectedCities([...selectedCities, foundCity])
      // let cityId = cities.find((locale) => locale.attributes.name === cityName);
      // getCity(cityId.id).then((data) => setCityData1(data.data));

    
  }
  // const compareCity = (cityName) => {
  //   if (Object.keys(city1).length === 0) {

  //     let foundCity = cities.find((city) => city.attributes.name === cityName);
  //     setCity1(foundCity)
  //     setSelectedCities([...selectedCities, foundCity])
  //     let cityId = cities.find((locale) => locale.attributes.name === cityName);
  //     getCity(cityId.id).then((data) => setCityData1(data.data));
  //   } else {
  //     let foundCity = cities.find((city) => city.attributes.name === cityName);
  //     setCity2(foundCity)
  //     let cityId = cities.find((locale) => locale.attributes.name === cityName);
  //     getCity(cityId.id).then((data) => setCityData2(data.data));
  //   }
    
  // }
console.log('city in app AR', city)
console.log('city1 in app AR', city1)
console.log('city2 in app AR', city2)
console.log('cityData1 in app AR', cityData1)
console.log('cityData2 in app AR', cityData2)
console.log('selectedCities in app AR', selectedCities)
  return (
    <>
      <Header />
      <Route
        exact
        path="/info/:city_name"
        render={({ match }) => {
        return <CityInfo cityName={match.params.city_name} city={city} city1={city1} city2={city2}setCity={setCity} cities={cities} setCities={setCities}/> 
        }}
      />

      <Route exact path="/">
        <SearchBar filterNames={filterNames} cities={cities} />
        {/* { Object.keys(city1).length !== 0 || Object.keys(city2).length !== 0 && */}
        <SelectedToCompare city1={city1} city2={city2} cities={selectedCities} findCity={findCity} compareCity={compareCity}/>
{/* } */}
        {filteredNames.length === 0 ? (
          <CitiesContainer cities={cities} findCity={findCity} compareCity={compareCity} city1={city1} city2={city2} cityData1={cityData1} cityData2={cityData2}/>
        ) : (
          <CitiesContainer filteredNames={filteredNames} findCity={findCity} compareCity={compareCity} city1={city1} city2={city2} cityData1={cityData1} cityData2={cityData2} />
        )}
      </Route>
        
        {/* { Object.keys(cityData2).length !== 0 && */}

          <Route exact path="/comparison/">
        <ComparisonPage city={city} city1={city1} city2={city2} cityData1={cityData1} cityData2={cityData2}/>

      </Route>
       {/* } */}

    </>
  );
};

export default App;
