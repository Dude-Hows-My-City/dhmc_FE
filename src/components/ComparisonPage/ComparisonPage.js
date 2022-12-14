import Quality from "../Quality/QualityIndex";
import Housing from "../Housing/HousingIndex";
import { StyledComparisonPage } from "../styles/ComparisonPage.styled";
import Salary from "../Salary";
import Culture from "../Culture";

export const ComparisonPage = ({ selectedCities }) => {
  return (
    <StyledComparisonPage>
      <section className="comparison-page">
        <div data-cy="city-info-container" className="city-info-container">
          <div data-cy="city-info-name-wrapper" className="city-name">
            <h2 data-cy="city-info-name">
              {selectedCities[0].attributes.full_name}
            </h2>
            <img
              className="city-1-image"
              data-cy="city-info-image"
              alt={`beautiful ${selectedCities[0].attributes.full_name}`}
              src={selectedCities[0].attributes.details.image_mobile_url}
            />
            <Quality city={selectedCities[0]} />
          </div>
        </div>
        <div data-cy="city-info-container" className="city-info-container">
          <div data-cy="city-info-name-wrapper" className="city-name">
            <h2 data-cy="city-info-name">
              {selectedCities[1].attributes.full_name}
            </h2>
            <img
              className="city-2-image"
              data-cy="city-info-image"
              alt={`beautiful ${selectedCities[1].attributes.full_name}`}
              src={selectedCities[1].attributes.details.image_mobile_url}
            />
            <Quality city={selectedCities[1]} />
          </div>
        </div>
      </section>
      <Housing selectedCities={selectedCities} />
      <Salary selectedCities={selectedCities} />
      <Culture selectedCities={selectedCities} />
    </StyledComparisonPage>
  );
};
