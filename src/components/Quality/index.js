import { StyledQuality } from "../styles/Quality.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import Progress from "../Progress";

const Quality = ({ city }) => {
  console.log(city);
  return (
    <>
      <h2>Quality Scores</h2>
      <Progress
        score={city.attributes.scores.housing}
        city={city}
        name="Housing"
      />
      <Progress
        score={city.attributes.scores.cost_of_living}
        city={city}
        name="Cost of Living"
      />
      <Progress
        score={city.attributes.scores.startups}
        city={city}
        name="Startups"
      />
      <Progress
        score={city.attributes.scores.venture_capital}
        city={city}
        name="Venture Capital"
      />
      <Progress
        score={city.attributes.scores.travel_connectivity}
        city={city}
        name="Travel Connectivity"
      />
      <Progress
        score={city.attributes.scores.commute}
        city={city}
        name="Commute"
      />
      <Progress
        score={city.attributes.scores.business_freedom}
        city={city}
        name="Business Freedom"
      />
      <Progress
        score={city.attributes.scores.safety}
        city={city}
        name="Safety"
      />
      <Progress
        score={city.attributes.scores.health_care}
        city={city}
        name="Healthcare"
      />
      <Progress
        score={city.attributes.scores.education}
        city={city}
        name="Education"
      />
      <Progress
        score={city.attributes.scores.environmental_quality}
        city={city}
        name="Environmental Quality"
      />
      <Progress
        score={city.attributes.scores.economy}
        city={city}
        name="Economy"
      />
      <Progress
        score={city.attributes.scores.taxation}
        city={city}
        name="Taxation"
      />
      <Progress
        score={city.attributes.scores.internet_access}
        city={city}
        name="Internet Access"
      />
      <Progress
        score={city.attributes.scores.leisure_and_culture}
        city={city}
        name="Leisure and Culture"
      />
      <Progress
        score={city.attributes.scores.tolerance}
        city={city}
        name="Tolerance"
      />
      <Progress
        score={city.attributes.scores.outdoors}
        city={city}
        name="Outdoors"
      />
    </>
  );
};

export default Quality;
