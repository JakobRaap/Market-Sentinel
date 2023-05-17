import Link from "next/link";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
`;
const StyledLinkWithRightBorder = styled(Link)`
  border-right: 1px solid black;
  color: inherit;
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
export default function CalendarNavigationBar() {
  return (
    <StyledHeader>
      <StyledLinkWithRightBorder href={"/"}>
        Todays Events
      </StyledLinkWithRightBorder>
      <StyledLink href={"/thisWeek"}>This Weeks Events</StyledLink>
    </StyledHeader>
  );
}
