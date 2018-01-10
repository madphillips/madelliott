import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

const AboutWrapper = styled.div`
  padding: 3em 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Quote = styled.p`
  font-size: 1em;
  border: 1px solid ${COLORS.darkgray};
  padding: 1.5em 2em;
  background-color: ${COLORS.gray};
  color: ${props => COLORS[props.color || "darkgray"]};
  margin: 1.5em 0;
`;

const Col = styled.div`
  width: 50%;
  min-width: 400px;
  display: inline-block;

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }
  div {
    margin: 3em 5em;
  }

  img {
    max-height: 600px;
    width: auto;
    margin: 0 auto;
  }
`;

const About = props => (
  <AboutWrapper id="about-us">
    <Col>
      <h2>ABOUT US</h2>
      <div>
        <Quote color="pink">
          "Elliott is one of the constants in my life. Always so kind and full of laughter. He is forever supportive
          and I'm so thankful that he pushes me to be the best I can be. I can't imagine life without him."
        </Quote>
        <p>Maddie and Elliott met a Freeman High School in Richmond, VA. On the first day of school,
           they met in the bus ramp where they discovered they not only ride the same bus, they actually 
           live just a couple houses away from each other. A few weeks later, Elliott asked Maddie to 
           Homecoming. She refused, instead wanting to get to know Elliott first. They quickly became 
           good friends. After a couple years, they started dating and the rest is ancient history!
           This January they will celebrate their 11th year together.
        </p>
        <Quote color="blue">
          "Elliott is one of the constants in my life. Always so kind and full of laughter. He is forever supportive
          and I'm so thankful that he pushes me to be the best I can be. I can't imagine life without him."
        </Quote>
      </div>
    </Col>
    <Col>
      <img src="/static/engagement-photo-1.jpg" width="580" height="865"/>
    </Col>
  </AboutWrapper>
)

export default About