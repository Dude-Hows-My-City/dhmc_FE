import CityCard from "../CityCard/CityCard";
import { StyledHousing } from "../styles/Housing.styled";

const Housing = ({ city }) => {
  //   console.log(city.attributes);
  return (
    <StyledHousing>
      <h2>Housing</h2>
      <div className="apartments">
        <div className="small">
          <h3>Small Apartment</h3>
          <p>{city.attributes.details.housing.small_apartment}</p>
        </div>
        <div className="medium">
          <h3>Medium Apartment</h3>
          <p>{city.attributes.details.housing.medium_apartment}</p>
        </div>
        <div className="large">
          <h3>Large Apartment</h3>
          <p>{city.attributes.details.housing.large_apartment}</p>
        </div>
      </div>
    </StyledHousing>
  );
};
export default Housing;
