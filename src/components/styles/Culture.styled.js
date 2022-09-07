import styled from "styled-components";

export const StyledCulture = styled.section`
  background-color: #d8dad7;
  border: solid 0.2em limegreen;
  border-radius: 1em;
  margin-bottom: 1em;
  margin-left: 5%;
  padding: 1em;
  width: 90%;

  .culture-element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .culture-icon {
    border: solid 0px;
    border-radius: 0em;
    width: 2em;
    height: 2rem;
  }
`;
