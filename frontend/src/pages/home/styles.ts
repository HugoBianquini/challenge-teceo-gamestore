import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: center;
`;

export const Header = styled.main`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
    background: ${theme.colors.grey[900]};
    padding: 32px 24px 32px 24px;
  `}
`;

export const Content = styled.main`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: center;
  padding: 32px 24px 32px 24px;
`;

export const TitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: fit-content;
  color: ${({ theme }) => theme.colors.light};
`;
