import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import React from 'react';
import {Flex, Box} from 'grid-styled';

const DetailsWrapper = styled.div`
  padding: 3em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  background: url("/static/engagement-photo-1.jpg") center no-repeat;
  width: 100%;
  height: 100%;
`;

const Quote = styled.p`
  font-size: 1em;
  border: 1px solid ${COLORS.darkgray};
  padding: 1.5em 2em;
  background-color: ${COLORS.gray};
  color: ${COLORS.blue};
  margin: 1.5em 0;

`;

const Col = styled(Box)`
  min-width: 400px;

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }
`;

const Details = () => (
  <DetailsWrapper id="details">
    <h2>DETAILS</h2>
    <Flex wrap="wrap" justify="center">
      <Col w={[ 1, 1/2, 1/3 ]}>
        <h2>The Wedding</h2>
        <ul>
          <li>
            <h3>Where is it?</h3>
            <p>Friday, March 23, 2018<br />
              The Mill at Fine Creek<br />
              2434 Robert E Lee Rd, Powhatan, VA 23139
            </p>
          </li>
          <li>
            <h3>Where should I wear?</h3>
            <p>Semi-formal attire is perferred.
            </p>
          </li>
          <li>
            <h3>Do you have a timeline?</h3>
            <p>As of right now, we have not finalized our timeline. Seating for the ceremony will begin at 5:30pm and the reception will end at 11pm.
            </p>
          </li>
          <li>
            <h3>Will you have transportation? If not, where do I park?</h3>
            <p>We will not have transportation to or from the venue. The Mill at Fine Creek has a very large parking lot on site right in front of the main entrance. Please drink responsibly and arrange to have a designated driver to be safe!
            </p>
          </li>
        </ul>
      </Col>
      <Col w={[ 1, 1/2, 1/3 ]}>
        <h2>The Wedding</h2>
      </Col>
      <Col w={[ 1, 1/2, 1/3 ]}>
        <h2>The Wedding</h2>
      </Col>
    </Flex>
  </DetailsWrapper>
)

export default Details