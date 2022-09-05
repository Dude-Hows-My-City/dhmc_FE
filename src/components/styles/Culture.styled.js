import styled from "styled-components";

export const StyledCulture = styled.section`
  border: solid 3px red;
  border-radius: 1em;
  margin-left: 5%;
  width: 90%;

  .culture-element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .culture-icon {
    border-radius: 0em;
    width: 2em;
    height: 2rem;
  }
`;
