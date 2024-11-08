import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  width: 70%;
`;

export const TextArea = styled.textarea`
  border-radius: 12px;
  height: 70px;
  padding: 8px 12px 8px 12px;
  font-family: "Roboto";
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
