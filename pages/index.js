import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from "react-apollo";
import fetch from "isomorphic-fetch";
import styled, { injectGlobal } from "styled-components";
import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Details from '../components/Details'
import Photos from '../components/Photos'
import Registry from '../components/Registry'
import Rsvp from '../components/Rsvp'
import { P } from "../components/Text";
import { COLORS, FONTS } from '../constants';

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.graph.cool/simple/v1/cjdc18xj31rtv01295al0jwct" }),
  cache: new InMemoryCache().restore({})
});

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.gray};
    font-family: ${FONTS.displaySerif};
    color: #595959;
    -webkit-font-smoothing: antialiased;
  }
`;

const IntroParagraph = styled.div`
  max-width: 540px;
  margin: 100px auto 40px;
  text-align: center;

  ${P} {
    font-size: 22px;
    line-height: 36px;
    font-weight: 300;
  }
`;

export default () => (
  <ApolloProvider client={client}>
    <div>
      <Nav />
      <Header />
      <About />
      <Details />
      <Photos />
      <Registry />
      <Rsvp />
    </div>
  </ApolloProvider>
);