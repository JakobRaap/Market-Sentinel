import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export const StyledListItem = styled.li`
  background-color: lightgrey;
  border: 2px solid black;
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
    margin: 2px;
    margin-left: 8px;
  }
  &:hover {
    background-color: rgba(211, 211, 211, 0.425);
  }
`;
