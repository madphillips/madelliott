import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

const RSVPWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Col = styled.div`
  width: 90%;
  min-width: 400px;
  margin: auto;

  h2 {
    text-align: center;
    color: ${COLORS.darkgreen};
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

const Rsvp = () => (
  <RSVPWrapper id="rsvp">
    <Col>
      <h2>RSVP</h2>
      <div>
        <p>Test text here. Lorem ipsum etc etc etc...</p>
      </div>
    </Col>
  </RSVPWrapper>
)

export default Rsvp