import styled from "styled-components";
import { COLORS } from "../constants";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  ul {
    margin: 0;
    padding: 0;
    background-color: rgba(255,255,255,0.8);
    list-style: none;
    display: flex;
    justify-content: center;
  }

  a {
    flex: 1;
    border-left: 2px solid ${COLORS.gray};
    border-right: 2px solid ${COLORS.gray};
    padding: 20px 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: -1px;
    color: ${COLORS.green};
  }
  a:hover {
    background-color: ${COLORS.green};
    
    li {
      color: white;
    }
  }
`;

const Nav = () => (
  <NavWrapper>
    <ul>
      <a href="#about-us">
        <li>About Us</li>
      </a>
      <a href="#wedding-details">
        <li>Wedding Details</li>
      </a>
      <a href="#photos">
        <li>Photos</li>
      </a>
      <a href="#registry">
        <li>Our Registry</li>
      </a>
      <a href="#rsvp">
        <li>RSVP</li>
      </a>
      <a href="#contact-us">
        <li>Contact Us</li>
      </a>
    </ul>
  </NavWrapper>
)

export default Nav;