import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

const AboutWrapper = styled.div`
  padding: 3em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Col = styled.div`
  width: ${props => props.width};
  min-width: 400px;
  display: ${props => [props.display || "inline-block"]};
  flex-wrap: ${props => [props.wrap || "nowrap"]};
  justify-content: ${props => [props.justifyContent || "flex-start"]};
  align-content: ${props => [props.alignContent || "stretch"]};

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }
  p {
    line-height: 1.5em;
  }
  div {
    margin: 3em 0 3em 5em;
  }

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
  font-size: 1em;
  line-height: 1.25em!important;
  border: 1px solid ${COLORS.darkgray};
  padding: 1.5em 2em;
  background-color: ${COLORS.gray};
  color: ${props => COLORS[props.color || "darkgray"]};
  margin: 1.5em 0;
  width: 350px;
  position: absolute;
  left: ${props => [props.left || "auto"]};
  right: ${props => [props.right || "auto"]};
  top: ${props => [props.top || "auto"]};
  bottom: ${props => [props.bottom || "auto"]};
`;

const About = props => (
  <AboutWrapper id="about-us">
    <Col width="45%" display="flex" justifyContent="center" alignContent="center" wrap="wrap">
      <h2>ABOUT US</h2>
      <div>
        <p>Maddie and Elliott met a Freeman High School in Richmond, VA. On the first day of school,
           they met in the bus ramp where they discovered they not only ride the same bus, they actually 
           live just a couple houses away from each other. A few weeks later, Elliott asked Maddie to 
           Homecoming. She refused, instead wanting to get to know Elliott first. They quickly became 
           good friends. After a couple years, they started dating and the rest is ancient history!
           This January they will celebrate their 11th year together.
        </p>
      </div>
    </Col>
    <Col width="55%">
      <ImageWrapper>
        <img src="/static/engagement-photo-1.jpg" width="435" height="649"/>
        <Quote color="blue" left="-5%" top="-10px">
            "Elliott is one of the constants in my life. Always so kind and full of laughter. He is forever supportive
            and I'm so thankful that he pushes me to be the best I can be. I can't imagine life without him."
        </Quote>
        <Quote color="pink" right="-5%" bottom="0">
          "Elliott is one of the constants in my life. Always so kind and full of laughter. He is forever supportive
          and I'm so thankful that he pushes me to be the best I can be. I can't imagine life without him."
        </Quote>
      </ImageWrapper>
    </Col>
  </AboutWrapper>
)

export default About