import React from 'react';
import {Flex, Box} from 'grid-styled';
import Anchor from "./Anchor";
import TrackVisibility from "react-on-screen";
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import { P } from "./Text";
import { shade } from "polished";
import Container from "./Container";

const AboutWrapper = styled.div`
  padding-top: 32px;
  background: #fff;

  h2 {
    color: ${COLORS.green};
  }
`;

const Col = styled(Box)`
  min-width: 400px;

  img {
    max-height: 550px;
    display: block;
    width: auto;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin: 3em 5em!important;
`;

const Quote = styled.p`
  font-size: 16px;
  line-height: 1.25em!important;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5em 2em;
  background: #fff;
  color: ${props => shade(0.8, COLORS[props.color || "darkgray"])};
  margin: 1.5em 0;
  width: 350px;
  position: absolute;
  font-family: ${FONTS.textSerif};
  left: ${props => [props.left || "auto"]};
  right: ${props => [props.right || "auto"]};
  top: ${props => [props.top || "auto"]};
  bottom: ${props => [props.bottom || "auto"]};
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? "-20%" : 0});
  transition-property: opacity, transform;
  transition-duration: 0.45s;
  transition-timing-function: ease-out;
  transition-delay: ${props => props.delay || 0}ms;
`;

const About = props => (
  <AboutWrapper>
    <Anchor id="about-us" title="About Us" />
    <Container justify="center">
      <Flex w={[1, .45]} display="flex" align="center" wrap>
        <Box>
          <h2>ABOUT US</h2>
          <P>
          Maddie and Elliott met at the bus ramp in high school, where they not only discovered that they rode the same bus, but that they lived a couple of houses apart from each other. Weeks later, a smitten Elliott worked up the nerve to ask Maddie to Homecoming, and bam, she turned him down! But only for the noblest of reasons. She wanted to get to know him first. They quickly became best friends and after a couple of years, they started dating. The rest is now ancient history! This January they celebrated their 11th year together.
          </P>
        </Box>
      </Flex>
      <Col w={[1, .55]}>
        <TrackVisibility offset={200}>
          {({ isVisible }) => (
            <ImageWrapper>
              <img src="/static/engagement-photo-1.jpg" width="435" height="649"/>
              <Quote color="pink" left="-40px" top="-10px" isVisible={isVisible}>
                "Elliott is one of the constants in my life. Always so kind and full of laughter. He is forever supportive
                and I'm so thankful that he pushes me to be the best I can be. I can't imagine life without him."
              </Quote>
              <Quote color="blue" right="-40px" bottom="0" delay={200} isVisible={isVisible}>
                "Ever since I first saw Maddie's smile, I knew she was the one for me. I look forward to every day I get to
                spend with her and her engaging and exuberant personality."
              </Quote>
            </ImageWrapper>
          )}
        </TrackVisibility>
      </Col>
    </Container>
  </AboutWrapper>
)

export default About