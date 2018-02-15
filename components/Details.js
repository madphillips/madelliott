import React from 'react';
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import Anchor from "./Anchor";
import Button from "./Button";
import {Flex, Box} from 'grid-styled';
import { P } from "./Text";

const RecommendationWrapper = styled.div `
  padding: 3em 4em 0;
  background: ${props => props.hasBackground ? "url('/static/maddie-and-elliott-coffee-2.jpg') center no-repeat" : "transparent"};
  color: ${props => props.hasBackground ? COLORS[props.color]: "#595959"};
  text-shadow: ${props => props.hasBackground ? "0px 0px 5px black" : "none"};

  h2 {
    color: ${props => props.hasBackground ? COLORS[props.color]: COLORS["green"]};
  }

  h3 {
    color: ${props => props.hasBackground ? COLORS[props.color]: COLORS["darkgreen"]};
  }
`;

const DetailsWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    text-align: center;
  }

  h3 {
    margin-top: 0;
  }
  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 25px;
  }
`;

const FlexContainer = props => <Flex my={3} mx={-2} {...props} />;

const Col = props => <Box my={3} px={2} style={{ textAlign: "center" }} {...props} />;

const ArrowBox = styled.div`
  background: linear-gradient(${COLORS.darkgreen}, ${COLORS.green});
  padding: 20px 25px;
  border-radius: 8px;
  position: relative;
  z-index: 3;
  text-shadow: none;

  /* Arrow */
  &:before {
    content: "";
    z-index: 1;
    display: block;
    position: absolute;
    top: -14px;
    left: 50%;
    border-style: solid;
    border-width: 0 14px 14px 14px;
    border-color: transparent transparent ${COLORS.darkgreen} transparent;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    transform: translateX(-50%);
  }

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
`;

const RecommendationCol = styled(Col)`
  ${P} {
    font-size: 14px;
    color: white;
    text-align: left;
  }
`;

const Details = () => (
  <DetailsWrapper>
    <RecommendationWrapper color="white" hasBackground="true">
      <Anchor id="wedding-details" title="Wedding Details" />
      <h2>DETAILS</h2>
      <Box pt={2} style={{ textAlign: "center" }}>
        <h3>Recommendations During Your Visit</h3>
        <Box style={{ maxWidth: 600 }} mx="auto">
          <P fontFamily="textSerif" fontSize={18}>
          We are foodies with a penchant for craft beers, so most of our recommended locations are belly satisfying!
          </P>
        </Box>
        <FlexContainer wrap>
          <RecommendationCol w={[ 1, 1/2 ]}>
            <h4>Planning to Visit Richmond?</h4>
            <ArrowBox>
              <P>
              Our favorite places are in the Scott’s Addition area- our neighborhood! Especially on a beautiful day, we recommend pulling on some comfortable shoes and walking the neighborhood and BE HUNGRY/THIRSTY!
      Veil Brewery has the best IPAs in town, Buskey Cidery satisfies a cider fix, Tazza Kitchen has amazing cocktails and the amazing brick oven pizza, Sabai satisfies a spicy, Thai craving, and some creamy Gelati Celesti ice cream cools our tongues afterwards!
              </P>
              <P>
              Shopping more your thing? Carytown is the local shopping strip with lots of locally owned shops and restaurants and great walkability. Need more? Short Pump is the a shopping and restaurant mecca and a quick hop on 64W will take you there. Prefer a relaxing cup of coffee? We love Black Hand Coffee Company in the Museum District, whose small but quaint atmosphere is perfect for bringing your laptop or a good book.
              </P>
            </ArrowBox>
          </RecommendationCol>
          <RecommendationCol w={[ 1, 1/2 ]}>
            <h4>Planning to Visit Charlottesville?</h4>
            <ArrowBox>
              <P>
              Our favorite place in Charlottesville is the Historic Downtown Mall, which is an outdoor mall and completely dog friendly. We love bringing our pup and sitting in Citizen Burger’s outdoor patio. The Sprint Pavilion is on the far east side of the Downtown Mall and we have caught a couple of concerts there!
              </P>
              <P>
                For the historian in you, Monticello is also a quick drive south of Charlottesville with a colonial dining experience at Michie Tavern right around the corner! Looking for a drink? Charlottesville’s beer scene is starting to grown and is also surrounded by numerous excellent wineries, we have yet to try one we didn’t like!
              </P>
            </ArrowBox>
          </RecommendationCol>
        </FlexContainer>
      </Box>
    </RecommendationWrapper>
    <RecommendationWrapper>
      <Box style={{ textAlign: "center" }}>
        <h3>Accommodations</h3>
        <Box style={{ maxWidth: 600 }} mx="auto">
          <P fontFamily="textSerif" fontSize={18}>
            The nearest hotels are in the Short Pump area, 
            which is about a 20 minute drive from The Mill 
            at Fine Creek- below are a couple of choices.
          </P>
        </Box>
        <FlexContainer wrap>
          <Col w={[ 1, 1/2 ]} >
            <Button as="a" href="http://www.starwoodhotels.com/alofthotels/property/overview/index.html?propertyID=3139&language=en_US&localeCode=en_US" target="_blank" color="darkgreen">
              Aloft Richmond West
            </Button>
            <P fontFamily="textSerif">3939 Duckling Drive<br />Glen Allen, Virginia 23060<br />804.433.1888</P>
          </Col>
          <Col w={[ 1, 1/2 ]}>
            <Button as="a" href="https://richmondwest.house.hyatt.com/en/hotel/home.html" target="_blank" color="darkgreen">
              Hyatt House Richmond West
            </Button>
            <P fontFamily="textSerif">11800 W Broad Street<br />Suite 1098<br />Henrico, Virginia 23233<br />804.360.7021</P>
          </Col>
        </FlexContainer>
      </Box>
    </RecommendationWrapper>
  </DetailsWrapper>
)

export default Details