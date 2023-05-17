import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  justify-content: space-evenly;
  background-color: white;
  margin-left: 70px;
  margin-right: 70px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;
const StyledImage = styled(Image)`
  border: 2px solid black;
  padding: 5px;
  border-radius: 10px;
  margin: 6px;
`;

export default function NavigationBar() {
  return (
    <StyledFooter>
      <Link href="/">
        <StyledImage
          src="/calendar.png"
          width={50}
          height={50}
          alt="img not found:("
        ></StyledImage>
      </Link>
      <Link href="/alarms">
        <StyledImage
          src="/alarm_toggled.png"
          width={50}
          height={50}
          alt="img not found:("
        ></StyledImage>
      </Link>
    </StyledFooter>
  );
}
