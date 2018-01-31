import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import React from 'react';
import {Flex, Box} from 'grid-styled';

const DetailsWrapper = styled.div`
  padding: 3em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }
`;


const Col = styled(Box)`
  min-width: 400px;
`;

const Details = () => (
  <DetailsWrapper id="wedding-details">
    <h2>DETAILS</h2>
    <Flex wrap="wrap" justify="center">
      <Col w={[ 1, 1/2]}>
        <h3>The Wedding</h3>
        <ul>
          <li>
            <h4>When and where is it?</h4>
            <p>Friday, March 23, 2018 from 6pm until 11pm<br />
              The Mill at Fine Creek<br />
              2434 Robert E Lee Rd, Powhatan, VA 23139
            </p>
            <p>The Mill at Fine Creek is approximately a 30 minute drive from Richmond and an hour drive from Charlottesville.</p>
          </li>
          <li>
            <h4>What should I wear?</h4>
            <p>The dress code for the night is semi-formal. It is recommended that you plan for cold and/or inclement weather, as the ceremony will take place outdoors.
            </p>
          </li>
          <li>
            <h4>Do you have a timeline?</h4>
            <p>As of right now, we have not finalized our timeline. Seating for the ceremony will begin at 5:30pm and the reception will conclude at 11pm.
            </p>
          </li>
          <li>
            <h4>Will you have transportation? If not, where do I park?</h4>
            <p>We will not have transportation to or from the venue. The Mill at Fine Creek has a very large parking lot on site right in front of the main entrance. Please drink responsibly and arrange to have a designated driver to be safe!
            </p>
          </li>
        </ul>
      </Col>
      <Col w={[ 1, 1/2]}>
        <h3>Accomodations</h3>
        <p>List nearby hotels and B&Bs here</p>
      </Col>
    </Flex>
  </DetailsWrapper>
)

export default Details