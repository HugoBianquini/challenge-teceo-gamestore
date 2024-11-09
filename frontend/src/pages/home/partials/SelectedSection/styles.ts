import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 680px;
  height: 80px;
  background: ${({ theme }) => theme.colors.grey[50]};
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;

  span {
    font-size: large;
    font-weight: 500;
  }
`;
