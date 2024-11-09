import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  flex-direction: column;
  row-gap: 18px;
  align-items: center;
  justify-content: center;

  .infinite-list {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  row-gap: 18px;
`;
