import Header from '../components/Header'
import About from '../components/About'
import Details from '../components/Details'
import Photos from '../components/Photos'
import Registry from '../components/Registry'
import Rsvp from '../components/Rsvp'
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS } from '../constants';

injectGlobal`
  body {
    background-color: ${COLORS.gray};
    font-family: ${FONTS.serif};
    margin: 0 2em;
  }

  p {
    font-size: 1.25em;
  }
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 1.75em;
  }
  h3 {
    font-size: 1.25em;
  }
  h4 {
    font-size: 1em;
    text-transform: uppercase;
  }
`;

const IntroParagraph = styled.div`
  width: 50%;
  min-width: 350px;
  margin: 5em auto;
  text-align: center;

  a {
    text-decoration: none;
    color: ${COLORS.darkgreen};
  }
  a:hover {
    color: ${COLORS.green};
  }
`;

export default () => (
  <div>
    <Header />
    <IntroParagraph>
      <p>Thank you everyone for taking the time to access our website! Please click the link <a href="#rsvp">to RSVP</a>. We cannot wait to see you at our wedding!</p>
    </IntroParagraph>
    <About />
    <Details />
    <Photos />
    <Registry />
    <Rsvp />
  </div>
)