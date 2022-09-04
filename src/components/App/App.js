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
  const [selectedCities, setSelectedCities] = useState([]);
  const [updatedCities, setUpdatedCities] = useState([]);
  const [citiesAlways, setCitiesAlways] = useState([])

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
    city1,
    city2,
    cityData2,
    selectedCities,
    updatedCities,
  ]);

  const filterNames = (query) => {
    setFilteredNames(
      cities.filter((city) =>
        city.attributes.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const findCity = (cityName) => {
    console.log("findCity in app", cityName);
    let foundCity = citiesAlways.find((city) => city.attributes.name === cityName);
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
      setCities(newCities)
    } else {
      let foundCity = updatedCities.find(
        (city) => city.attributes.name === cityName
      );
      setSelectedCities([...selectedCities, foundCity]);
      let newCities = updatedCities.filter(
        (city) => city.attributes.name !== cityName
      );
      setUpdatedCities(newCities);
      setCities(newCities)

    }
    // let cityId = cities.find((locale) => locale.attributes.name === cityName);
    // getCity(cityId.id).then((data) => setCityData1(data.data));
  };

  // const deleteCompared = (id) => {
  //   let deletedCity = 
  //   console.log('delteCompared App city data ', id)

  // }

  console.log("city in app AR", city);
  console.log("city1 in app AR", city1);
  console.log("city2 in app AR", city2);
  console.log("cityData1 in app AR", cityData1);
  console.log("cityData2 in app AR", cityData2);
  console.log("selectedCities in app AR", selectedCities);
  console.log("updatedCities in app AR", updatedCities);
  console.log(cities);

  return (
    <>
      <Header />
      <Route
        exact
        path="/info/:city_name"
        render={({ match }) => {
          return (
            <CityInfo
              cityName={match.params.city_name}
              testedCity={city}
              testedCity1={selectedCities[1]}
              testedCity0={selectedCities[0]}

              newCity={city}
              city2={city2}
              setCity={setCity}
              cities={cities}
              setCities={setCities}
              selectedCities={selectedCities}
            />
          );
        }}
      />

      <Route exact path="/">
        <SearchBar filterNames={filterNames} cities={cities} />
        <SelectedToCompare
          city1={city1}
          city2={city2}
          cities={selectedCities}
          findCity={findCity}
          compareCity={compareCity}
          deleteCompared={deleteCompared}
        />

        {filteredNames.length === 0 ? (
          <CitiesContainer
            cities={cities}
            findCity={findCity}
            compareCity={compareCity}
            city1={city1}
            city2={city2}
            cityData1={cityData1}
            cityData2={cityData2}
            selectedCities={selectedCities}
          />
        ) : (
          <CitiesContainer
            filteredNames={filteredNames}
            findCity={findCity}
            compareCity={compareCity}
            city1={city1}
            city2={city2}
            cityData1={cityData1}
            cityData2={cityData2}
            selectedCities={selectedCities}
          />
        )}
      </Route>

      <Route exact path="/comparison/">
        <ComparisonPage
          selectedCities={selectedCities}
          city={city}
          city1={city1}
          city2={city2}
          cityData1={cityData1}
          cityData2={cityData2}
        />
      </Route>
    </>
  );
};

export default App;
