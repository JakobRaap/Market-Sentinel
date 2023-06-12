import styled from "styled-components";

export const StyledDownloadButton = styled.button`
  position: relative;

  margin: 15px;
  padding: 15px 15px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: white;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid rgba(169, 169, 169, 1);
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 rgba(169, 169, 169, 1);

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgba(169, 169, 169, 0.174);

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const CenteredItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;
