import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export const StyledListItem = styled.li`
  background-color: rgba(169, 169, 169, 0.174);
  border: 2px solid rgba(140, 139, 139, 0.351);
  border-radius: 5px;
  box-shadow: 2px 1px 1px 2px rgba(22, 20, 20, 0.288);

  margin: 2px;
  margin-bottom: 10px;
  transition: background-color 0.2s;
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-left: 8px;
  }
  &:hover {
    background-color: rgba(211, 211, 211, 0.425);
  }
`;
export const TodaysCardInfoContainer = styled.div`
  width: 100%;
  background-color: rgba(169, 169, 169, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  padding: 4px;
  justify-content: center;
  align-items: center;
`;

export const TodaysCardUpperContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-gap: 10px;
`;

export const TodaysCardImpactPTag = styled.p`
  text-align: right;
  border-radius: 5px;
  padding: 2px;
`;
export const TodaysCardEventTitlePTag = styled.p`
  text-align: center;
`;
