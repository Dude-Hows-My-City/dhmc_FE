import CityCard from "../CityCard/CityCard";
import { StyledHousing } from "../styles/Housing.styled";

const Housing = ({ city }) => {
  //   console.log(city.attributes);
  return (
    <StyledHousing>
      <h2 data-cy="housing-header">Housing</h2>
      <div data-cy="apartments-container" className="apartments">
        <div data-cy="apt-small" className="small">
          <h3 data-cy="apt-small-head">Small Apartment</h3>
          <p data-cy="apt-small-num">{city.attributes.details.housing.small_apartment}</p>
        </div>
        <div data-cy="apt-medium" className="medium">
          <h3 data-cy="apt-medium-head">Medium Apartment</h3>
          <p data-cy="apt-medium-num">{city.attributes.details.housing.medium_apartment}</p>
        </div>
        <div data-cy="apt-large" className="large">
          <h3 data-cy="apt-large-head">Large Apartment</h3>
          <p data-cy="apt-large-num">{city.attributes.details.housing.large_apartment}</p>
        </div>
      </div>
    </StyledHousing>
  );
};
export default Housing;
