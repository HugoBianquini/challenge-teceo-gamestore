import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  align-self: baseline;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
    background: ${theme.colors.grey[900]};
    padding: 32px 24px 32px 24px;
    align-items: center;
    justify-content: center;
  `}
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: baseline;
  justify-content: center;
  padding: 32px 24px 16px 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: fit-content;
  color: ${({ theme }) => theme.colors.light};
  align-items: center;
`;
