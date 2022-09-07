import styled from "styled-components";

export const StyledComparisonPage = styled.section`
  text-align: center;
  img {
    border: solid 0.2em limegreen;
    border-radius: 1em;
    margin-bottom: 1em;
    width: 100%;
  }

  .city-1-image {
    margin-left: 0.5em;
  }

  .city-2-image {
    // border: solid 3px red;
    margin-left: -0.4em;
  }

  .city-name {
    display: flex;
    flex-direction: column;
    width: 44vw;
  }

  .comparison-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }
`;
