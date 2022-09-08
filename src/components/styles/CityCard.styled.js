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
    right: 0;
    top: 0;
    z-index: 1;
  }

  .delete-button {
    bottom: 0;
    position: absolute;
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
    height: 15vh;
    margin-top: 2vh;
    position: relative;
    width: 100%;
  }

  img {
    border-radius: 1rem;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .checkbox {
    background-color: #d8dad7;
    border-radius: 0.5rem;
    bottom: 0.2rem;
    color: limegreen;
    font-weight: 700;
    left: 0.2rem;
    padding-left: 0.3em;
    padding-right: 0.3em;
    position: absolute;
    z-index: 1;
  }

  .image-label {
    color: limegreen;
    font-size: 2rem;
    padding-bottom: 0em;
    text-align: center;
  }
`;
