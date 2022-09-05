import { useEffect, useState } from "react";
import CitiesContainer from "../CitiesContainer/CitiesContainer";
import SearchBar from "../Favorites/SearchBar/SearchBar";
import { CityInfo } from "../CityInfo/CityInfo";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import { getCities, getCity, postCity, getFavorites } from "../../apiCalls";
import { ComparisonPage } from "../ComparisonPage/ComparisonPage";
import { SelectedToCompare } from "../SelectedToCompare/SelectedToCompare";
import { Favorites } from "../Favorites/Favorites";


const App = () => {
  const [cities, setCities] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);
  const [city, setCity] = useState({});
  const [selectedCities, setSelectedCities] = useState([]);
  const [updatedCities, setUpdatedCities] = useState([]);
  const [citiesAlways, setCitiesAlways] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then((data) => console.log('Favorites Data', data))
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
    if (filteredNames.length !== 0 && query ) {

      let newFilteredCities = filteredNames.filter(
        (city) => city.attributes.name !== cityName
      )
      setFilteredNames(newFilteredCities)
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
    // let filteredNames = [...citiesAlways.includes(query)]
    let filteredNamess = [...filteredNames,  deletedCity]
    setUpdatedCities(returnedUpdatedCities.sort((a, b) => a.id - b.id));
    setCities(returnedCities.sort((a, b) => a.id - b.id));
    query &&
    setFilteredNames(filteredNamess.sort((a, b) => a.id - b.id))
  };

  // const findFavCity = (id) => {

  //   postCity(id).then(data => {
  //     console.log(data)
  //   })
  //   .catch(error => console.log('Ah shit here we go again'))
  
  //   let fav = citiesAlways.find(ciity => ciity.id === id)
  //   setFavorites([...favorites, fav])
    // const postCity = (id) => {
      // e.preventDefault()

  // }


const findFavCity = (e) => {
  let fav = citiesAlways.find(ciity => ciity.id === e)
    setFavorites([...favorites, fav])
  postCity(e)
  .then(data => {
    console.log('Data from findFavCity in App', data)
  })
  .catch(error => console.log('ERROR'))
}

// const findFavCity = (e) => {
//   // setUrls([...urls, newUrl])
// console.log('newUrl in App', e)
// postCity(e).then(data => {
//   console.log('Post newUrl from the app', data)
//   console.log('Urls from the app', e)
// })
// }
  console.log('filteredNames App AR', filteredNames);
  console.log('Favorites App AR', favorites);
  console.log('query App AR', query);

  return (
    <>



<Nav />


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
            findFavCity={findFavCity}
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
          />
        )}
      </Route>

      <Route exact path="/comparison/">
        <ComparisonPage
          selectedCities={selectedCities}
          city={city}
        />
      </Route>

      <Route exact path="/favorites/">
        <Favorites
          selectedCities={selectedCities}
          city={city}
          favorites={favorites}
          findFavCity={findFavCity}
        />
      </Route>
    </>
  );
};

export default App;
