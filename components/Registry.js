import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import React from 'react';
import {Flex, Box} from 'grid-styled';

const RegistryWrapper = styled.div`
  padding: 3em 0 0 0;

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }

  p {
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 700px;
  }
`;


const Col = styled(Box)`
  min-width: 400px;
  text-align: center;

  img {
    max-width: 300px;
    min-width: 150px;
    margin: 0 auto;
  }
`;

const Registry  = () => (
  <RegistryWrapper id="registry">
    <h2>Registry</h2>
    <p>
      The greatest wedding gift you could give to Maddie and Elliott is the pleasure of your company on their 
      special day, but, of course, their home won't stock itself. Therefore, they are registered at Crate &amp; 
      Barrel and Amazon. You can click on the images below to link directly to the registries.
    </p>
    <Flex wrap="wrap" justify="center" align="flex-start">
      <Col>
        <a href="https://www.crateandbarrel.com/gift-registry/maddie-phillips-and-elliott-pogue/r5720998" target="_blank">
          <img src="/static/crateandbarrel.svg" height="220" />
        </a>
      </Col>
      <Col>
        <a href="https://www.amazon.com/wedding/maddie-phillips-elliott-pogue-richmond-march-2018/registry/12WY5AFUB093R" target="_blank">
          <img src="/static/amazon.svg" height="220"/>
        </a>
      </Col>
    </Flex>
  </RegistryWrapper>
)

export default Registry