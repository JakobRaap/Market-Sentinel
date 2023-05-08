import styled from "styled-components";
const StyledLi = styled.li`
  font-size: 0.6rem;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr 1fr;
`;
export default function WeeklyCard({ event }) {
  return (
    <StyledLi>
      <p>{event.time}</p>
      <p>{event.title}</p>
      <p>{event.date}</p>
      <p>{event.country}</p>
      <p>{event.impact}</p>
    </StyledLi>
  );
}
