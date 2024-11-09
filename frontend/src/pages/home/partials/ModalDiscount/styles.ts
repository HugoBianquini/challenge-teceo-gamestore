import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .list-selected {
    margin-top: 32px;
    width: 100%;
    height: 600px !important;
  }
`;

export const DescriptionContainer = styled.div`
  p {
    line-height: 24px;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px 12px 16px;
  border: 1px solid #ddd;
`;

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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  justify-content: center;
`;
