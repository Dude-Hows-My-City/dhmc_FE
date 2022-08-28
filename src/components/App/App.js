
import { useContext, useEffect, useState } from 'react';
import data from '../../mockData';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import SearchBar from '../Favorites/SearchBar/SearchBar';
import './App.css';


const App = () => {

const [cities, setCities] = useState([])
const [filteredNames, setFilteredNames] = useState([])

useEffect(() => {
  setCities(data)
},[filteredNames])

const filterNames = (query) => {
  console.log('queryfromtheapp', query)
  setFilteredNames(cities.filter(city => city.name.includes(query)))

}

  return (
   <>
   <SearchBar filterNames={filterNames} cities={cities}/>
   
   {filteredNames.length === 0 ? <CitiesContainer cities={cities}/> :  <CitiesContainer filteredNames={filteredNames}/>}
   {console.log('filteredNames', filteredNames)}
   </>
  );
}

export default App;
