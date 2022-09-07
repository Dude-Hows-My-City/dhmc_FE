import { useEffect, useState } from "react";
import { getCities, getCity } from "../../apiCalls";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/HousingIndex";
import { StyledCityInfo } from "../styles/CityInfo.styled";
import Salary from "../Salary";
import Culture from "../Culture";
export const CityInfo = ({ testedCity }) => {
  useEffect(() => {
    // getCity(cityId.id).then((data) => setCity(data.data));
  }, [testedCity]);

  return (
    <>
      {testedCity !== undefined && (
        <StyledCityInfo>
          <div data-cy="city-info-container" className="city-info-container">
            <div data-cy="city-info-name-wrapper" className="city-name">
              <h2 data-cy="city-info-name">
                {testedCity.attributes.full_name}
              </h2>
              <img
                data-cy="city-info-image"
                src={testedCity.attributes.details.image_mobile_url}
              />
              <Quality city={testedCity} />
              <Housing city={testedCity} />
              <Salary city={testedCity} />
              <Culture city={testedCity} />
            </div>
          </div>
        </StyledCityInfo>
      )}
    </>
  );
};
