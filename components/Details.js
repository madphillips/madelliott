import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

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

const Details = () => (
  <DetailsWrapper id="details">
    <Col>
      <h2>DETAILS</h2>
      <h3>The Wedding</h3>
      <p>Friday, March 23, 2018<br />
        The Mill at Fine Creek<br />
        2434 Robert E Lee Rd, Powhatan, VA 23139
      </p>
      <p>
        
      </p>
      <h3></h3>
    </Col>
  </DetailsWrapper>
)

export default Details