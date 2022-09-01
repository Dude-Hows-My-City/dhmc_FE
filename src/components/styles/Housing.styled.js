import styled from "styled-components";

export const StyledHousing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 90%;

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
`;
