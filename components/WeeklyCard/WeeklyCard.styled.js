import styled from "styled-components";
import Link from "next/link";

export const WeeklyCardStyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 4fr 1.3fr 1.2fr 0.7fr;
  align-items: center;
  font-size: 0.6rem;
  border-radius: 4px;
  padding-left: 0.5rem;
  background-color: rgba(169, 169, 169, 0.174);
  border: 1px solid rgba(140, 139, 139, 0.351);
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(211, 211, 211, 0.425);
  }
`;
