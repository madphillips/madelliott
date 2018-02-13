import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import React from 'react';
import {Flex, Box} from 'grid-styled';

const FaqsWrapper = styled.div`
  padding: 5em 0 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid ${COLORS.gray};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: auto;
    padding: 0;
  }
`;

const FlexContainer = styled(Flex)`
  margin: 2em 4em;
`;

const Col = styled(Box)`
`;

const FaqSectionTitle = styled.div`
  text-align: center;
  margin-bottom: 12px;

  img {
    max-width: 40px;
    max-height: 40px;
    display: block;
    margin: 10px auto;
  }
  span {
    margin: auto;
    text-transform: uppercase;
  }
`;

const Faqs = () => (
  <FaqsWrapper id="faqs">
    <h2>Have Questions? Hopefully We Have Your Answer!</h2>
    <FlexContainer wrap="wrap" justify="center">
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
        <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Ceremony Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
        <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Guest Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
      <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Media Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
      <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Food &amp; Drink Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
      <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Transportation Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
      <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Registry Questions</span>
        </FaqSectionTitle>
      </Col>
      <Col id="faq" w={[1/2, 1/3, 1/4 ]}>
      <FaqSectionTitle>
          <img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/dog.png" />
          <span>Contact Us</span>
        </FaqSectionTitle>
      </Col>
    </FlexContainer>
  </FaqsWrapper>
)

export default Faqs