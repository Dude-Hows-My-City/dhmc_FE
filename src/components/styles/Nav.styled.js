import styled from "styled-components";

export const StyledNav = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #d8dad7;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  height: 8vh;
  text-align: center;

  button {
    background-color: #d8dad7;
    border: solid 0.15em limegreen;
    border-radius: 0.5em;
    color: limegreen;
    cursor: pointer;
    /* margin-bottom: 1em; */
    margin-left: 1em;
  }

  h1 {
    cursor: pointer;
    font-size: 1.7em;
    font-style: italic;
    font-weight: 700;
    color: limegreen;
    padding-top: 0.5em;
  }
`;
