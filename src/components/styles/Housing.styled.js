import styled from "styled-components";

export const StyledHousing = styled.section`
  border-radius: 1em;
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  .small,
  .medium,
  .large {
    display: flex;
    flex-direction: column;
  }

  .apartments {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .compared-apartments-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .small-apartment,
  .medium-apartment,
  .large-apartment,
  .city-names {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
  }
`;
