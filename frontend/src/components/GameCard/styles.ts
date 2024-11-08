import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 680px;
  min-height: 200px;
  max-height: 300px;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: box-shadow 0.3s ease-in-out;
  padding: 24px 32px 24px 18px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  max-width: 140px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  max-width: 75%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: fit-content;
  color: ${({ theme }) => theme.colors.light};
`;

export const PriceText = styled.span`
  font-size: larger;
  font-weight: bold;
  color: green;
`;

export const CategoryContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  color: ${({ theme }) => theme.colors.grey[500]};

  span {
    font-size: medium;
  }
`;

export const EditIconContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.grey[500]};

  &:hover {
    color: ${({ theme }) => theme.colors.grey[900]};
  }
`;
