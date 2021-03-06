import styled, { injectGlobal } from "styled-components";
import { Box } from "grid-styled";
import Anchor from "./Anchor";
import Container from "./Container";
import Form from "./Form";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

const RsvpWrapper = styled.div`
  padding: 80px 0;
  background: #fff url('/static/rsvp-bg.jpg') 50% no-repeat;
`;

const RsvpContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 690px;
  min-height: 540px;
  margin: 0 auto;
  padding: 20px 40px;
  background: #fff;

  h2 {
    text-align: center;
    color: ${COLORS.green};
    margin-top: 0;
  }

  img {
    max-height: 600px;
    width: auto;
    margin: 0 auto;
  }

  div {
    flex: 1;
  }
`;

const RSVP = () => (
  <RsvpWrapper>
    <Anchor id="rsvp" title="RSVP" />
    <RsvpContainer>
      <div>
        <h2>RSVP</h2>
        <Form />
      </div>
    </RsvpContainer>
  </RsvpWrapper>
)

export default RSVP;