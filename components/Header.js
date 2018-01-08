import Nav from './Nav'
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background-color: rgb(242,242,242);
  }
`;

const HeroImage = styled.img`
  width: 100%;
`;

const Header = () => (
  <div>
    <Nav />
    <HeroImage src="/static/hero-image.jpg" />
  </div>
)

export default Header;