import CityCard from "../CityCard/CityCard";
import { StyledHousing } from "../styles/Housing.styled";

const Housing = ({ city, selectedCities }) => {
  return selectedCities === undefined ? (
    <StyledHousing>
      <h2 data-cy="housing-header">Housing</h2>
      <div data-cy="apartments-container" className="apartments">
        <div data-cy="apt-small" className="small">
          <h3 data-cy="apt-small-head">Small Apartment</h3>
          {city.attributes.details.housing.small_apartment ? (
            <p data-cy="apt-small-num">
              {city.attributes.details.housing.small_apartment}
            </p>
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div data-cy="apt-medium" className="medium">
          <h3 data-cy="apt-medium-head">Medium Apartment</h3>
          {city.attributes.details.housing.medium_apartment ? (
            <p data-cy="apt-medium-num">
              {city.attributes.details.housing.medium_apartment}
            </p>
          ) : (
            <p>N/A</p>
          )}
        </div>
        <div data-cy="apt-large" className="large">
          <h3 data-cy="apt-large-head">Large Apartment</h3>
          {city.attributes.details.housing.large_apartment ? (
            <p data-cy="apt-large-num">
              {city.attributes.details.housing.large_apartment}
            </p>
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
    </StyledHousing>
  ) : (
    <StyledHousing>
      <h2 data-cy="housing-header">Housing</h2>
      <div
        data-cy="compared-apartments-container"
        className="compared-apartments-container"
      >
        <div data-cy="city-names" className="city-names">
          <h3>{selectedCities[0].attributes.name}</h3>
          <h3>{selectedCities[1].attributes.name}</h3>
        </div>

        <div data-cy="small-apartment" className="small-apartment">
          <p data-cy="apt-small-num-1">
            {selectedCities[0].attributes.details.housing.small_apartment}
          </p>
          <h3 data-cy="apt-small-head">Small Apt.</h3>
          <p data-cy="apt-small-num-2">
            {selectedCities[1].attributes.details.housing.small_apartment}
          </p>
        </div>

        <div data-cy="medium-apartment" className="medium-apartment">
          <p data-cy="apt-medium-num-1">
            {selectedCities[0].attributes.details.housing.medium_apartment}
          </p>
          <h3 data-cy="apt-medium-head">Medium Apt.</h3>
          <p data-cy="apt-medium-num-2">
            {selectedCities[1].attributes.details.housing.medium_apartment}
          </p>
        </div>

        <div data-cy="large-apartment" className="large-apartment">
          <p data-cy="apt-large-num-1">
            {selectedCities[0].attributes.details.housing.large_apartment}
          </p>
          <h3 data-cy="apt-large-head">Large Apt.</h3>
          <p data-cy="apt-large-num-2">
            {selectedCities[1].attributes.details.housing.large_apartment}
          </p>
        </div>
      </div>
    </StyledHousing>
  );
};
export default Housing;
