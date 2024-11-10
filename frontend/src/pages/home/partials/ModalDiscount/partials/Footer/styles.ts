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

export const ContainerToast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  padding-bottom: 8px;
`;

export const SmallButton = styled.button`
  min-width: 80px;
  padding: 6px 14px 6px 14px;
  font-size: medium;
  font-family: "Roboto";
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey[100]};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
`;
