import { StyledCulture } from "../styles/Culture.styled";

const Culture = ({ city }) => {
  console.log(city.attributes.details.culture);
  return (
    <StyledCulture>
      <h2>Culture</h2>
      <h4>Art Galleries</h4>
      {/* <img src={}/> */}
    </StyledCulture>
  );
};

export default Culture;
