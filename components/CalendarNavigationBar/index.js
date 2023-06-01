import Link from "next/link";
import styled, { css } from "styled-components";
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(140, 139, 139, 0.7);
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 10px;
  ${(props) =>
    props.$withborder && `border-right: 1px solid rgba(140, 139, 139, 0.7);`}
  ${(props) =>
    props.$active &&
    css`
      font-weight: bold;
      background-color: rgba(140, 139, 139, 0.7);
      text-decoration: underline;
    `}
`;
export default function CalendarNavigationBar({ page }) {
  return (
    <StyledHeader>
      <StyledLink $active={page === "today"} $withborder href={"/"}>
        Todays Events
      </StyledLink>
      <StyledLink $active={page === "thisWeek"} href={"/thisWeek"}>
        This Weeks Events
      </StyledLink>
    </StyledHeader>
  );
}
