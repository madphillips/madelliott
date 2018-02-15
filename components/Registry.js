import React from 'react';
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import {Flex, Box} from 'grid-styled';
import Anchor from "./Anchor";
import { P } from "./Text";

const RegistryWrapper = styled.div`
  padding: 3em 0 0 0;
  border-top: 1px solid ${COLORS.gray};
  border-bottom: 1px solid ${COLORS.gray};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);

  h2 {
    color: ${COLORS.green};
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  p {
    margin-top: 3em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 700px;
    padding: 0 3em;
  }
`;


const Col = styled(Box)`
  min-width: 400px;
  text-align: center;
`;

const VendorLogo = styled.img`
  max-width: 300px;
  height: 150px;
`;

const Registry  = () => (
  <RegistryWrapper>
    <Anchor id="registry" title="Registry" />
    <h2>Registry</h2>
    <Box style={{ maxWidth: 600 }} mx="auto">
      <P fontFamily="textSerif" fontSize={16}>
      The greatest wedding gift you can give us is the pleasure of
       your company on our special day. If, however, you have an
       irresistible urge to help us outfit our home, we're registered
       at Crate &amp; Barrel and Amazon. You can click on the images
       below to link directly to the registries.
      </P>
    </Box>
    <Flex wrap="wrap" justify="center" align="flex-start">
      <Col>
        <a href="https://www.crateandbarrel.com/gift-registry/maddie-phillips-and-elliott-pogue/r5720998" target="_blank">
          <VendorLogo src="/static/crateandbarrel-formatted.svg" />
        </a>
      </Col>
      <Col>
        <a href="https://www.amazon.com/wedding/maddie-phillips-elliott-pogue-richmond-march-2018/registry/12WY5AFUB093R" target="_blank">
          <VendorLogo src="/static/amazon-formatted.svg" />
        </a>
      </Col>
    </Flex>
  </RegistryWrapper>
)

export default Registry