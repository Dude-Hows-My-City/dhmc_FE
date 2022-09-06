import React from "react";
import { StyledCityCard } from "../styles/CityCard.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const CityCard = ({
  city,
  findCity,
  compareCity,
  selectedCities,
  findFavCity,
  removeFavorite,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {

  }, [checked])

  const handleSubmit = (e) => {
    // console.log("whole e ", e);
    console.log(e.target.id);
    e.preventDefault();
    findFavCity(e.target.id);
  };

  const handleDelete = (e) => {
    // console.log("whole e ", e);
    console.log(e.target.id);
    e.preventDefault();
    removeFavorite(e.target.id);
  };

  const handleChange = (e) => {
    compareCity(e.target.id);
    console.log("whole e ", e);
    console.log(e.target.id);
    // findFavCity(e.target.id)
    // setChecked(true);
  };

  const handleFavs = (e) => {
    //  console.log("whole e ", e);

    if(checked === false) {


      e.preventDefault();
  
       console.log(e.target.id);
      setChecked(true);
      // compareCity(e.target.id);
      findFavCity(e.target.id)
    }
  };

  return (
    <StyledCityCard>
      <div data-cy="city-card" className="city-card-container" key={city.id}>
        {/* <button
          id={city.id}
          data-cy="favorite-button"
          onClick={(e) => handleSubmit(e)}
          className="favorite-button"
        >
          ⭐️
        </button> */}

        <div className="favorite-checkbox">
          <label>
            <input
              // id={`favorite_${city.attributes.name}`}
              id={city.id}
              type="checkbox"
              // data-cy="checkbox"
              checked={checked}
              onChange={(e) => handleFavs(e)}
            />
            I'm your Fav!
          </label>
        </div>

        <button
          id={city.id}
          data-cy="delete-button"
          onClick={(e) => handleDelete(e)}
          className="delete-button"
        >
          DELETE
        </button>

        <NavLink
          to={`/info/${city.attributes.name}`}
          key={city.id}
          style={{ textDecoration: "none" }}
          onClick={() => findCity(city.attributes.name)}
        >
          <img
            className="city-image"
            data-cy="city-image"
            src={city.attributes.details.image_web_url}
            alt={`${city.attributes.name}'s skyline`}
          ></img>

          <p data-cy="city-name" className="image-label">
            {" "}
            {city.attributes.name}{" "}
          </p>
        </NavLink>

        {!selectedCities ||
          (selectedCities.length < 2 && (
            <div className="checkbox">
              <label>
                <input
                  id={city.attributes.name}
                  type="checkbox"
                  data-cy="checkbox"
                  // checked={checked}
                  onChange={(e) => handleChange(e)}
                />
                Compare
              </label>
            </div>
          ))}
      </div>
    </StyledCityCard>
  );
};

export default CityCard;
