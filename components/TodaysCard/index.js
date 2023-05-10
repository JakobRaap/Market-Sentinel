import styled from "styled-components";
import { uid } from "uid";

const StyledList = styled.li`
  list-style: none;
  border: 1px solid black;
  margin: 2px;
  h2 {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: bold;

    text-transform: uppercase;
  }
  p {
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: 2px;
    margin-left: 8px;
  }
`;

export default function TodaysCard({ event }) {
  return (
    <>
      <StyledList>
        <h2>{event.title}</h2>
        <p>{event.time}</p>
        <p>{event.country}</p>
        <p>{event.impact}</p>
      </StyledList>
    </>
  );
}
