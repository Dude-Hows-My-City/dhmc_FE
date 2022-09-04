import { useState, useEffect } from "react";
import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/HousingIndex";
import { StyledComparisonPage } from "../styles/ComparisonPage.styled";

export const ComparisonPage = ({ selectedCities }) => {
  return (
    <StyledComparisonPage>
      <section className="comparison-page">
        <div data-cy="city-info-container" className="city-info-container">
          <div data-cy="city-info-name-wrapper" className="city-name">
            <h2 data-cy="city-info-name">
              {selectedCities[0].attributes.name}
            </h2>
            <img
              data-cy="city-info-image"
              src={selectedCities[0].attributes.details.image_mobile_url}
            />
            <Quality city={selectedCities[0]} />
            <Housing city={selectedCities[0]} />
          </div>
        </div>

        <div data-cy="city-info-container" className="city-info-container">
          <div data-cy="city-info-name-wrapper" className="city-name">
            <h2 data-cy="city-info-name">
              {selectedCities[1].attributes.name}
            </h2>
            <img
              data-cy="city-info-image"
              src={selectedCities[1].attributes.details.image_mobile_url}
            />
            <Quality city={selectedCities[1]} />
            <Housing city={selectedCities[1]} />
          </div>
        </div>
      </section>
    </StyledComparisonPage>
  );
};
