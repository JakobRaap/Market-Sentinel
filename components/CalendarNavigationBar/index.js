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
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  ${(props) => props.withborder && `border-right: 1px solid black;`}
`;
export default function CalendarNavigationBar() {
  return (
    <StyledHeader>
      <StyledLink withborder="true" href={"/"}>
        Todays Events
      </StyledLink>
      <StyledLink href={"/thisWeek"}>This Weeks Events</StyledLink>
    </StyledHeader>
  );
}
