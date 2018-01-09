import Header from '../components/Header'
import About from '../components/About'
import Details from '../components/Details'
import Contact from '../components/Contact'
import Photos from '../components/Photos'
import Registry from '../components/Registry'
import Rsvp from '../components/Rsvp'
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS } from '../constants';

injectGlobal`
  body {
    background-color: ${COLORS.gray};
    font-family: ${FONTS.serif};
  }
`;

export default () => (
  <div>
    <Header />
    <About />
    <Details />
    <Photos />
    <Registry />
    <Rsvp />
    <Contact />
  </div>
)