import { useEffect, useState } from "react";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header";
import { getCities, getCity } from "../../apiCalls";
import { ComparisonPage } from "../ComparisonPage/ComparisonPage";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});
  const [city1, setCity1] = useState({});
  const [city2, setCity2] = useState({});
  const [cityData1, setCityData1] = useState({});
  const [cityData2, setCityData2] = useState({});
  

  useEffect(() => {
    getCities()
    .then(data => setCities(data.data))
  }, [filteredNames, cityData2]);

  const filterNames = (query) => {
    setFilteredNames(cities.filter((city) => city.name.includes(query)));
  };

  const findCity = (cityName) => {
    let foundCity = cities.find((city) => city.attributes.name === cityName);
    setCity(foundCity);
  };

  const compareCity = (cityName) => {
    if (Object.keys(city1).length === 0) {

      let foundCity = cities.find((city) => city.attributes.name === cityName);
      setCity1(foundCity)
      let cityId = cities.find((locale) => locale.attributes.name === cityName);
      getCity(cityId.id).then((data) => setCityData1(data.data));
    } else {
      let foundCity = cities.find((city) => city.attributes.name === cityName);
      setCity2(foundCity)
      let cityId = cities.find((locale) => locale.attributes.name === cityName);
      getCity(cityId.id).then((data) => setCityData2(data.data));
    }
    
  }
console.log('city1 in app AR', city1)
console.log('city2 in app AR', city2)
console.log('cityData1 in app AR', cityData1)
console.log('cityData2 in app AR', cityData2)
  return (
    <>
      <Header />
      <Route
        exact
        path="/info/:city_name"
        render={({ match }) => {
        return <CityInfo cityName={match.params.city_name} city={city} setCity={setCity} cities={cities} setCities={setCities}/> 
        }}
      />

      <Route exact path="/">
        <SearchBar filterNames={filterNames} cities={cities} />
        {filteredNames.length === 0 ? (
          <CitiesContainer cities={cities} findCity={findCity} compareCity={compareCity} city1={city1} city2={city2}/>
        ) : (
          <CitiesContainer filteredNames={filteredNames} findCity={findCity} compareCity={compareCity} city1={city1} city2={city2} />
        )}
      </Route>
        
        { Object.keys(cityData2).length !== 0 &&

          <Route exact path="/comparison/">
        <ComparisonPage city1={city1} city2={city2} cityData1={cityData1} cityData2={cityData2}/>

      </Route>
      }

    </>
  );
};

export default App;
