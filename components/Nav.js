import styled from "styled-components";
import { BoxContainer as Container } from "./Container";
import { FONTS, COLORS } from "../constants";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  font-family: ${FONTS.textSans};
  font-weight: 700;
  background-color: rgba(255,255,255,0.92);
`;

const Link = styled.a`
  display: inline-block;
  font-size: 16px;
  padding: 20px 24px;
  margin: 0 16px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: -1px;
  color: ${COLORS.green};
  transition: 0.1s color;

  &:hover {
    color: ${COLORS.darkgray};
  }
`;

const Nav = () => (
  <NavWrapper>
    <Container style={{ textAlign: "center" }}>
      <Link href="#about-us">
        About Us
      </Link>
      <Link href="#wedding-details">
        Wedding Details
      </Link>
      <Link href="#registry">
        Our Registry
      </Link>
      <Link href="#faqs">
        FAQs
      </Link>
      <Link href="#rsvp">
        RSVP
      </Link>
    </Container>
  </NavWrapper>
)

export default Nav;