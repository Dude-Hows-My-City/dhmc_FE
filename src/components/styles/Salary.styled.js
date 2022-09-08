import styled from "styled-components";
export const StyledSalary = styled.section`
  background-color: #d8dad7;
  border: solid 0.2em limegreen;
  border-radius: 1em;
  margin-bottom: 1em;
  margin-left: 5%;
  width: 90%;

  .both-payouts,
  .both-titles {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .search-job-button {
    background-color: #d8dad7;
    border: solid 0.15em limegreen;
    border-radius: 0.5em;
    color: limegreen;
    cursor: pointer;
  }

  select {
    border: solid 0.15em limegreen;
    border-radius: 0.5em;
    color: limegreen;
  }
`;
