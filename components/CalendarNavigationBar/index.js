import Link from "next/link";
import styled, { css } from "styled-components";
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 10px;
  ${(props) => props.withborder && `border-right: 1px solid black;`}
  ${(props) =>
    props.active === "true" &&
    css`
      font-weight: bold;
      background-color: #ccc;
    `}
`;
export default function CalendarNavigationBar({ page }) {
  return (
    <StyledHeader>
      <StyledLink
        active={page === "today" ? true : "false"}
        withborder="true"
        href={"/"}
      >
        Todays Events
      </StyledLink>
      <StyledLink
        active={page === "thisWeek" ? "true" : "false"}
        href={"/thisWeek"}
      >
        This Weeks Events
      </StyledLink>
    </StyledHeader>
  );
}
