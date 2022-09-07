import styled from "styled-components";

export const StyledCityCard = styled.section`
  background-color: #d8dad7;
  border: solid 0.2em limegreen;
  border-radius: 1em;
  margin-left: 2.5%;
  margin-bottom: 0.5em;
  width: 95%;

  .favorite-button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  .delete-button {
    position: absolute;
    bottom: 0;
    right: 4rem;
    z-index: -1;
  }

  .favorite-checkbox {
    background-color: #d8dad7;
    border-radius: 0.5rem;
    bottom: 0.2rem;
    color: limegreen;
    font-weight: 700;
    padding-left: 0.3em;
    padding-right: 0.3em;
    position: absolute;
    right: 0.2rem;
    z-index: 2;
  }

  .city-card-container {
    position: relative;
    margin-top: 2vh;
    height: 15vh;
    width: 100%;
  }

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .checkbox {
    background-color: #d8dad7;
    border-radius: 0.5rem;
    color: limegreen;
    font-weight: 700;
    left: 0.2rem;
    padding-left: 0.3em;
    padding-right: 0.3em;
    position: absolute;
    bottom: 0.2rem;
    z-index: 1;
  }

  .image-label {
    color: limegreen;
    font-size: 2rem;
    padding-bottom: 0em;
    text-align: center;
  }
`;
