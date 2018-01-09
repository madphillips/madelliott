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

  li {
    flex: 1;
    border-left: 2px solid ${COLORS.gray};
    border-right: 2px solid ${COLORS.gray};
    padding: 20px 0;
    text-align: center;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${COLORS.green};
  }
  li:hover {
    background-color: ${COLORS.green};
    
    a {
      color: white;
    }
  }
`;

const Nav = () => (
  <NavWrapper>
    <ul>
      <li>
        <a href="#about-us">About Us</a>
      </li>
      <li>
        <a href="#wedding-details">Wedding Details</a>
      </li>
      <li>
        <a href="#photos">Photos</a>
      </li>
      <li>
        <a href="#registry">Registry</a>
      </li>
      <li>
        <a href="#rsvp">RSVP</a>
      </li>
      <li>
        <a href="#contact-us">Contact Us</a>
      </li>
    </ul>
  </NavWrapper>
)

export default Nav;