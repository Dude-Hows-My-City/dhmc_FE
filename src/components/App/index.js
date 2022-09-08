import { useEffect, useState } from "react";
import CitiesContainer from "../CitiesContainer";
import SearchBar from "../SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import {
  getCities,
  postCity,
  getFavorites,
  deleteFavorite,
} from "../../apiCalls";
import { ComparisonPage } from "../ComparisonPage/ComparisonPage";
import { SelectedToCompare } from "../SelectedToCompare/SelectedToCompare";
import { Favorites } from "../Favorites/Favorites";
import { Login } from "../Login";

const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [updatedCities, setUpdatedCities] = useState([]);
  const [citiesAlways, setCitiesAlways] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [checkedFav, setCheckedFav] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user) {
      getFavorites(user).then((data) => {
        if (data.length > 0) {
          setFavorites(data.data);
        }
      });
      getFavorites(user).then((data) =>
        console.log("favs data from UE", data.data)
      );
    }
    getCities().then((data) => setCitiesAlways(data.data));
    if (updatedCities.length < 1) {
      getCities().then((data) => setCities(data.data));
    } else {
      return;
    }
  }, [city, filteredNames, selectedCities, updatedCities, checkedFav, user]);

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
    if (filteredNames.length !== 0 && query) {
      let newFilteredCities = filteredNames.filter(
        (city) => city.attributes.name !== cityName
      );
      setFilteredNames(newFilteredCities);
    }
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
    let filteredNamess = [...filteredNames, deletedCity];
    setUpdatedCities(returnedUpdatedCities.sort((a, b) => a.id - b.id));
    setCities(returnedCities.sort((a, b) => a.id - b.id));
    query && setFilteredNames(filteredNamess.sort((a, b) => a.id - b.id));
  };

  const clearSelected = () => {
    if (selectedCities.length > 0) {
      setSelectedCities([]);
    }
  };

  const removeFavorite = (id) => {
    let removedFavs = favorites.filter((a) => a.id !== id);
    setFavorites(removedFavs);
    deleteFavorite(id).catch((error) => console.log("ERROR", error));
  };

  const findFavCity = (id) => {
    setCheckedFav(true);
    let foundFav = favorites.find((a) => a.id === id);
    if (foundFav === undefined) {
    }
    let fav = citiesAlways.find((ciity) => ciity.id === id);
    postCity(id).catch((error) => console.log("ERROR", error));
    setFavorites([...favorites, fav]);
  };

  return (
    <>
      <Nav favorites={favorites} clearSelected={clearSelected} />
      {user === "" ? (
        <Login setUser={setUser} user={user} />
      ) : (
        <>
          <Route
            exact
            path="/info/:city_name"
            render={({ match }) => {
              return (
                <CityInfo cityName={match.params.city_name} testedCity={city} />
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
              findFavCity={findFavCity}
              favorites={favorites}
            />

            {filteredNames.length === 0 && !query ? (
              <CitiesContainer
                cities={cities}
                findCity={findCity}
                compareCity={compareCity}
                selectedCities={selectedCities}
                findFavCity={findFavCity}
                citiesAlways={citiesAlways}
                favorites={favorites}
              />
            ) : filteredNames.length === 0 && query ? (
              <p>Your Search Did Not Bring Any Results</p>
            ) : (
              <CitiesContainer
                filteredNames={filteredNames}
                findCity={findCity}
                compareCity={compareCity}
                selectedCities={selectedCities}
                query={query}
                removeFavorite={removeFavorite}
                favorites={favorites}
                citiesAlways={citiesAlways}
              />
            )}
          </Route>

          <Route exact path="/comparison/">
            <ComparisonPage selectedCities={selectedCities} city={city} />
          </Route>

          <Route exact path="/favorites/">
            <Favorites
              selectedCities={selectedCities}
              city={city}
              favorites={favorites}
              findFavCity={findFavCity}
              removeFavorite={removeFavorite}
            />
          </Route>
        </>
      )}
    </>
  );
};

export default App;
