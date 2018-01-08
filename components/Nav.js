import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  ul {

  }

  li {

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