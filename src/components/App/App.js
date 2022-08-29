import { useContext, useEffect, useState } from "react";
import data from "../../mockData";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});

  useEffect(() => {
    setCities(data);
  }, [filteredNames]);

  const filterNames = (query) => {
    console.log("queryfromtheapp", query);
    setFilteredNames(cities.filter((city) => city.name.includes(query)));
  };

  const findCity = (cityName) => {
    let foundCity = cities.find((city) => city.name === cityName);
    setCity(foundCity);
  };

  return (
    <>
      <Route
        exact
        path="/info/:city_name"
        render={() => <CityInfo city={city} />}
      />

      {/* {console.log("filteredNames", filteredNames)} */}

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
