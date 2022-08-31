import { StyledQuality } from "../styles/Quality.styled";

const Quality = ({ city }) => {
  console.log(city);
  return (
    <StyledQuality>
      <h2>Quality Scores</h2>
      <div className="quality-scores housing">
        <p>Housing</p>
        <p>{Math.round(city.attributes.scores.housing)}/10</p>
      </div>
      <div className="quality-scores cost-of-living">
        <p>Cost of Living</p>
        <p>{Math.round(city.attributes.scores.cost_of_living)}/10</p>
      </div>
      <div className="quality-scores startups">
        <p>Startups</p>
        <p>{Math.round(city.attributes.scores.startups)}/10</p>
      </div>
      <div className="quality-scores venture-capital">
        <p>Venture Capital</p>
        <p>{Math.round(city.attributes.scores.venture_capital)}/10</p>
      </div>
      <div className="quality-scores travel-connectivity">
        <p>Travel Connectivity</p>
        <p>{Math.round(city.attributes.scores.travel_connectivity)}/10</p>
      </div>
      <div className="quality-scores commute">
        <p>Commute</p>
        <p>{Math.round(city.attributes.scores.commute)}/10</p>
      </div>
      <div className="quality-scores business-freedom">
        <p>Business Freedom</p>
        <p>{Math.round(city.attributes.scores.business_freedom)}/10</p>
      </div>
      <div className="quality-scores environmental-quality">
        <p>Environmental Quality</p>
        <p>{Math.round(city.attributes.scores.environmental_quality)}/10</p>
      </div>
      <div className="quality-scores economy">
        <p>Economy</p>
        <p>{Math.round(city.attributes.scores.economy)}/10</p>
      </div>
      <div className="quality-scores taxation">
        <p>Taxation</p>
        <p>{Math.round(city.attributes.scores.taxation)}/10</p>
      </div>
      <div className="quality-scores internet-access">
        <p>Internet Access</p>
        <p>{Math.round(city.attributes.scores.internet_access)}/10</p>
      </div>
      <div className="quality-scores tolerance">
        <p>Tolerance</p>
        <p>{Math.round(city.attributes.scores.tolerance)}/10</p>
      </div>
      <div className="quality-scores leisure-culture">
        <p>Leisure and Culture</p>
        <p>{Math.round(city.attributes.scores.leisure_and_culture)}/10</p>
      </div>
      <div className="quality-scores outdoors">
        <p>Outdoors</p>
        <p>{Math.round(city.attributes.scores.outdoors)}/10</p>
      </div>
      <div className="quality-scores commute">
        <p>Commute</p>
        <p>{Math.round(city.attributes.scores.commute)}/10</p>
      </div>
      <div className="quality-scores safety">
        <p>Safety</p>
        <p>{Math.round(city.attributes.scores.safety)}/10</p>
      </div>
      <div className="quality-scores education">
        <p>Education</p>
        <p>{Math.round(city.attributes.scores.education)}/10</p>
      </div>
      <div className="quality-scores healthcare">
        <p>Healthcare</p>
        <p>{Math.round(city.attributes.scores.health_care)}/10</p>
      </div>
    </StyledQuality>
  );
};

export default Quality;
