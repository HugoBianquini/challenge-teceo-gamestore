import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 28px 12px 28px;
  height: 80px;
  width: 100%;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
  z-index: 12;
  margin-top: 8px;
`;
