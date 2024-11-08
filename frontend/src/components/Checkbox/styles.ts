import styled from "styled-components";

export const Input = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  position: relative;
  transition: 0.4s;
`;
