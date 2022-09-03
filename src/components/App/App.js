import { useContext, useEffect, useState } from "react";
import data from "../../mockData";
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

  useEffect(() => {
    getCities()
    .then(data => setCities(data.data))
  }, [filteredNames]);

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
    } else {
      let foundCity = cities.find((city) => city.attributes.name === cityName);
      setCity2(foundCity)
    }
    
  }
console.log('city1 in app AR', city1)
console.log('city2 in app AR', city2)
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
          <CitiesContainer cities={cities} findCity={findCity} compareCity={compareCity}/>
        ) : (
          <CitiesContainer filteredNames={filteredNames} findCity={findCity} compareCity={compareCity} />
        )}
      </Route>
        
      <Route exact path="/comparison/:city1_city2">
        <ComparisonPage />

      </Route>

    </>
  );
};

export default App;
