import styled from "styled-components";

export const StyledNav = styled.section`
  background-color: #d8dad7;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  height: 10.5vh;
  margin-bottom: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;

  button {
    background-color: #d8dad7;
    border: solid 0.15em limegreen;
    border-radius: 0.5em;
    color: limegreen;
    cursor: pointer;
    margin-left: 1em;
  }

  h1 {
    color: limegreen;
    cursor: pointer;
    font-size: 1.7em;
    font-style: italic;
    font-weight: 700;
    padding-top: 0.5em;
  }
`;
