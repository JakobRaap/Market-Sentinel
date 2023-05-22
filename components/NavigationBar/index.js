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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
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
          alt="Calendar navigationbar icon"
        />
      </Link>
      <Link href="/alarms">
        <StyledImage
          src="/alarm_toggled.png"
          width={50}
          height={50}
          alt="Toggled alarms navigationbar icon"
        />
      </Link>
    </StyledFooter>
  );
}
