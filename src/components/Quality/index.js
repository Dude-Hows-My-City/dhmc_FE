import { StyledQuality } from "../styles/Quality.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "../Progress/Progress";

const Quality = ({ city }) => {
  console.log(city);
  return (
    <StyledQuality>
      <h2 data-cy="quality-scores">Quality Scores</h2>
      <div data-cy="progress-bars">
      <Progress
        score={city.attributes.scores.housing}
        city={city}
        name="Housing"
        data-cy="housing-bar"
      />
      <Progress
        score={city.attributes.scores.cost_of_living}
        city={city}
        name="Cost of Living"
        data-cy="col-bar"
      />
      <Progress
        score={city.attributes.scores.startups}
        city={city}
        name="Startups"
        data-cy="startup-bar"
      />
      <Progress
        score={city.attributes.scores.venture_capital}
        city={city}
        name="Venture Capital"
        data-cy="venture-bar"
      />
      <Progress
        score={city.attributes.scores.travel_connectivity}
        city={city}
        name="Travel Connectivity"
        data-cy="travel-bar"
      />
      <Progress
        score={city.attributes.scores.commute}
        city={city}
        name="Commute"
        data-cy="commute-bar"
      />
      <Progress
        score={city.attributes.scores.business_freedom}
        city={city}
        name="Business Freedom"
        data-cy="business-bar"
      />
      <Progress
        score={city.attributes.scores.safety}
        city={city}
        name="Safety"
        data-cy="safety-bar"
      />
      <Progress
        score={city.attributes.scores.health_care}
        city={city}
        name="Healthcare"
        data-cy="health-bar"
      />
      <Progress
        score={city.attributes.scores.education}
        city={city}
        name="Education"
        data-cy="education-bar"
      />
      <Progress
        score={city.attributes.scores.environmental_quality}
        city={city}
        name="Environmental Quality"
        data-cy="environment-bar"
      />
      <Progress
        score={city.attributes.scores.economy}
        city={city}
        name="Economy"
        data-cy="economy-bar"
      />
      <Progress
        score={city.attributes.scores.taxation}
        city={city}
        name="Taxation"
        data-cy="tax-bar"
      />
      <Progress
        score={city.attributes.scores.internet_access}
        city={city}
        name="Internet Access"
        data-cy="internet-bar"
      />
      <Progress
        score={city.attributes.scores.leisure_and_culture}
        city={city}
        name="Leisure and Culture"
        data-cy="lc-bar"
      />
      <Progress
        score={city.attributes.scores.tolerance}
        city={city}
        name="Tolerance"
        data-cy="tolerance-bar"
      />
      <Progress
        score={city.attributes.scores.outdoors}
        city={city}
        name="Outdoors"
        data-cy="outdoors-bar"
      />
      </div>
    </StyledQuality>
  );
};

export default Quality;
