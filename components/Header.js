import Nav from './Nav'
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS } from '../constants';

injectGlobal`
  body {
    background-color: rgb(242,242,242);
  }
`;

const HeroText = styled.div`
  position: absolute;
  width: 400px;
  top: 275px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 100;
  text-align: center;
  font-family: ${FONTS.serif};

  h2 {
    color: ${COLORS.green};
  }
  h2 span {
    color: ${COLORS.darkgray};
    line-height: 2.25em;
  }

  h1 {
    color: ${COLORS.darkgray};
    margin: 0;
  }
`;

const Hero = styled.div`
  height: 40em;
  width: 100%;
  position: relative;
  background: url('/static/hero-image.jpg') center no-repeat;
`;

const Header = () => (
  <div>
    <Nav />
    <Hero>
      <HeroText>
        <h2>WEDDING<br /><span>of</span></h2>
        <h1>Maddie <span>&amp;</span> Elliott</h1>
        <h2><span>in </span>72 DAYS</h2>
      </HeroText>
    </Hero>
  </div>
)

export default Header;