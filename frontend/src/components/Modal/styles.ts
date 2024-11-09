import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(35, 35, 35, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
  overflow-y: auto;
  height: 100%;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 16px;
  min-height: 80vh;
  min-width: 80vw;
`;

export const Header = styled.div`
  padding: 24px 24px 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 60px;

  svg {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: x-large;
  font-weight: 500;
  font-family: "Roboto";
`;

export const CloseBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    border: 1px solid ${theme.colors.grey[600]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  `}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
