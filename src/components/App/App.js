import { useContext, useEffect, useState } from "react";
import data from "../../mockData";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header";
import { getCities } from "../../apiCalls";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    getCities()
    .then(data => setCities(data.data))
  }, [filteredNames]);

  const filterNames = (query) => {
    setFilteredNames(cities.filter((city) => city.name.includes(query)));
  };

  const findCity = (cityName) => {
    let foundCity = cities.find((city) => city.name === cityName);
    setCity(foundCity);
  };

// https://dude-hows-my-city-be.herokuapp.com/api/v1
// endpoints: /cities    /cities/{id}

  return (
    <>
      <Header />
      <Route
        exact
        path="/info/:city_name"
        render={() => <CityInfo city={city} />}
      />

      <Route exact path="/">
        <SearchBar filterNames={filterNames} cities={cities} />
        {filteredNames.length === 0 ? (
          <CitiesContainer cities={cities} findCity={findCity} />
        ) : (
          <CitiesContainer filteredNames={filteredNames} findCity={findCity} />
        )}
      </Route>
    </>
  );
};

export default App;
