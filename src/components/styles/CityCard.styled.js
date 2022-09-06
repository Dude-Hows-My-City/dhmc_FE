import styled from "styled-components";

export const StyledCityCard = styled.section`

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
    z-index: 1;
  }

  .city-card-container {
    position: relative;
    margin: 0.5rem;
    margin-bottom: 0;
    margin-top: 2vh;
    height: 11vh;
  }

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;

  }

  .checkbox {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .image-label {
    // z-index: 1;
    position: absolute;
    bottom: 1vh;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    color: white;
    
  }
`;
