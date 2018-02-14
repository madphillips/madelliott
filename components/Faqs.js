import React from 'react';
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import { P } from "./Text";
import Icon from "./Icon";
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

class Faqs extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.state = {
      section: null
    }
  }

  handleSectionClick(e) {
    const { currentTarget: target } = e;
    if (target && target.dataset && target.dataset.section) {
      this.setState({
        section: target.dataset.section
      });
    }
  }

  render() {
    return (
      <FaqsWrapper id="faqs">
        <h2>Have Questions? Hopefully We Have Your Answer!</h2>
        <FlexContainer wrap="wrap" justify="center">
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="ceremony">
              <Icon icon={["far", "calendar-alt"]} />
              <span>Ceremony Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="guest">
              <Icon icon="users" />
              <span>Guest Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="media">
              <Icon icon="camera-retro" />
              <span>Media Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="food">
              <Icon icon="glass-martini" />
              <span>Food &amp; Drink Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="transportation">
              <Icon icon="car" />
              <span>Transportation Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="registry">
              <Icon icon="gift" />
              <span>Registry Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="contact">
              <Icon icon="envelope" />
              <span>Contact Us</span>
            </FaqSectionTitle>
          </Col>
        </FlexContainer>
        <FlexContainer>
          {this.state.section === "ceremony" && (
            <div>
              <P>Ceremony Answers</P>
            </div>
          )}
          {this.state.section === "guest" && (
            <div>
              <P>Guest Answers</P>
            </div>
          )}
          {this.state.section === "media" && (
            <div>
              <P>Media Answers</P>
            </div>
          )}
        </FlexContainer>
      </FaqsWrapper>
    )
  }
}

export default Faqs