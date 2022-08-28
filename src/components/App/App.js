
import { useContext, useEffect, useState } from 'react';
import data from '../../mockData';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import './App.css';


function App() {

const [cities, setCities] = useState([])

useEffect(() => {
  setCities(data)
},[])

  return (
   <>
   <CitiesContainer cities={cities}/>
   </>
  );
}

export default App;
