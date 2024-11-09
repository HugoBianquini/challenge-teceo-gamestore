import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 680px;
  align-items: center;
  justify-content: center;
  justify-self: center;
  row-gap: 18px;
  margin-bottom: 28px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 680px;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  div {
    display: flex;
    column-gap: 12px;
    align-items: center;
    font-size: medium;
    font-weight: 500;
  }
`;
