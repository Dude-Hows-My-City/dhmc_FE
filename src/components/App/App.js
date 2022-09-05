import { useEffect, useState } from "react";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header";
import { getCities, getCity, postCity } from "../../apiCalls";
import { ComparisonPage } from "../ComparisonPage/ComparisonPage";
import { SelectedToCompare } from "../SelectedToCompare/SelectedToCompare";
import { Login } from "../Login";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [updatedCities, setUpdatedCities] = useState([]);
  const [citiesAlways, setCitiesAlways] = useState([]);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    getCities().then((data) => setCitiesAlways(data.data));
    if (updatedCities.length < 1) {
      getCities().then((data) => setCities(data.data));
    } else {
      return;
    }
  }, [
    city,
    filteredNames,
    selectedCities,
    updatedCities,
  ]);

  const filterNames = (query) => {
    setQuery(query);
    setFilteredNames(
      cities.filter((city) =>
        city.attributes.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const findCity = (cityName) => {
    let foundCity = citiesAlways.find(
      (city) => city.attributes.name === cityName
    );
    setCity(foundCity);
  };

  const compareCity = (cityName) => {
    if (updatedCities.length === 0) {
      let foundCity = cities.find((city) => city.attributes.name === cityName);
      setSelectedCities([...selectedCities, foundCity]);
      let newCities = cities.filter(
        (city) => city.attributes.name !== cityName
      );
      setUpdatedCities(newCities);
      setCities(newCities);
    } else {
      let foundCity = updatedCities.find(
        (city) => city.attributes.name === cityName
      );
      setSelectedCities([...selectedCities, foundCity]);
      let newCities = updatedCities.filter(
        (city) => city.attributes.name !== cityName
      );
      setUpdatedCities(newCities);
      setCities(newCities);
    }
  };

  const deleteCompared = (id) => {
    let deletedCity = citiesAlways.find((city) => city.id === id);
    setSelectedCities(
      selectedCities.filter((city) => city.id !== deletedCity.id)
    );
    let returnedUpdatedCities = [...updatedCities, deletedCity];
    let returnedCities = [...cities, deletedCity];
    setUpdatedCities(returnedUpdatedCities.sort((a, b) => a.id - b.id));
    setCities(returnedCities.sort((a, b) => a.id - b.id));
  };

  return (
    <>
    {user === '' ? <Login setUser={setUser} user={user} setUserName={setUserName}/> : <>
      <Header />
      <Route
        exact
        path="/info/:city_name"
        render={({ match }) => {
          return (
            <CityInfo
              cityName={match.params.city_name}
              testedCity={city}
            />
          );
        }}
      />

      <Route exact path="/">
        <SearchBar filterNames={filterNames} cities={cities} />
        <SelectedToCompare
          cities={selectedCities}
          findCity={findCity}
          compareCity={compareCity}
          deleteCompared={deleteCompared}
        />

        {filteredNames.length === 0 && !query ? (
          <CitiesContainer
            cities={cities}
            findCity={findCity}
            compareCity={compareCity}
            selectedCities={selectedCities}
          />
        ) : filteredNames.length === 0 && query ? (
          <p>Your Search Did Not Bring Any Results</p>
        ) : (
          <CitiesContainer
            filteredNames={filteredNames}
            findCity={findCity}
            compareCity={compareCity}
            selectedCities={selectedCities}
          />
        )}
      </Route>

      <Route exact path="/comparison/">
        <ComparisonPage
          selectedCities={selectedCities}
          city={city}
        />
      </Route>
      </>
}
    </>
  );
};

export default App;
