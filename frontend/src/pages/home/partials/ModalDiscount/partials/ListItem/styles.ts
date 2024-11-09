import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 680px;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 32px 24px 18px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const PriceText = styled.strong`
  font-size: larger;
  font-weight: bold;
  color: green;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";

  span {
    font-size: small;
    font-weight: 300;
    line-height: 20px;
  }

  strong {
    font-size: large;
    font-weight: 500;
  }
`;
