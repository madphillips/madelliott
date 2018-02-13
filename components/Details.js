import React from 'react';
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import Anchor from "./Anchor";
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

const FlexContainer = styled(Flex)`
  margin: 2em 4em;
`;

const Col = styled(Box)`
`;

const Details = () => (
  <DetailsWrapper>
    <Anchor id="wedding-details" title="Wedding Details" />
    <h2>DETAILS</h2>
    <FlexContainer wrap="wrap" justify="center">
      <Col w={[ 1, 1/2]}>
        <h3>Accomodations</h3>
        <p>The nearest hotels are in the Short Pump area, which is about a 20 minute drive from The Mill at Fine Creek- below are a couple of choices.</p>
        <ul>
          <li>
            <a href="http://www.starwoodhotels.com/alofthotels/property/overview/index.html?propertyID=3139&language=en_US&localeCode=en_US" target="_blank">Aloft Richmond West</a>
            <p>3939 Duckling Drive<br />Glen Allen, Virginia 23060<br />804.433.1888</p>
          </li>
          <li>
            <a href="https://richmondwest.house.hyatt.com/en/hotel/home.html" target="_blank">Hyatt House Richmond West</a>
            <p>1180 W Broad Street<br />Suite 1098<br />Henrico, Virginia 23233<br />804.360.7021</p>
          </li>
        </ul>
      </Col>
      <Col w={[ 1, 1/2]}>
        <h3>Recommendations During Your Visit</h3>
        <p>
        We are foodies with a penchant for craft beers, so most of our recommended locations are belly satisfying!
        </p>
        <h4>Going into Richmond?</h4>
        <p>
        Our favorite places are in the Scott’s Addition area- our neighborhood! Especially on a beautiful day, we recommend pulling on some comfortable shoes and walking the neighborhood and BE HUNGRY/THIRSTY!
Veil Brewery has the best IPAs in town, Buskey Cidery satisfies a cider fix, Tazza Kitchen has amazing cocktails and the amazing brick oven pizza, Sabai satisfies a spicy, Thai craving, and some creamy Gelati Celesti ice cream cools our tongues afterwards!
        </p>
        <p>
        Shopping more your thing? Carytown is the local shopping strip with lots of locally owned shops and restaurants and great walkability. Need more? Short Pump is the a shopping and restaurant mecca and a quick hop on 64W will take you there. Prefer a relaxing cup of coffee? We love Black Hand Coffee Company in the Museum District, whose small but quaint atmosphere is perfect for bringing your laptop or a good book.
        </p>
        <h4>Going into Charlottesville?</h4>
        <p>
        Our favorite place in Charlottesville is the Historic Downtown Mall, which is an outdoor mall and completely dog friendly. We love bringing our pup and sitting in Citizen Burger’s outdoor patio. The Sprint Pavilion is on the far east side of the Downtown Mall and we have caught a couple of concerts there!
        </p>
        <p>
          For the historian in you, Monticello is also a quick drive south of Charlottesville with a colonial dining experience at Michie Tavern right around the corner! Looking for a drink? Charlottesville’s beer scene is starting to grown and is also surrounded by numerous excellent wineries, we have yet to try one we didn’t like!
        </p>
      </Col>
    </FlexContainer>
  </DetailsWrapper>
)

export default Details