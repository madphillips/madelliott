import React, { Fragment } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Flex, Box } from "grid-styled";
import { P, Link } from "./Text";
import Button from "./Button";
import { FONTS } from "../constants";

const Label = styled.label`
  display: block;
  font-family: ${FONTS.textSans};
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 1em 0;
`;

const Input = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  font-family: ${FONTS.textSans};
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 6px 8px;
  border: 1px solid rgb(210, 210, 210);
`;

const TextArea = styled.textarea`
  font-size: 16px;
  font-family: ${FONTS.textSans};
  line-height: 24px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 6px 8px;
  border: 1px solid rgb(210, 210, 210);
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      isLoading: false,
      isSubmitted: false,
      isValid: false,
      attending: true,
      email: "",
      primaryName: "",
      otherNames: "",
      comments: "",
      errors: {}
    }
  }

  componentDidMount() {
    this.validate();
  }

  validate() {
    let errors = {};

    if (this.state.primaryName === "") {
      errors.primaryName = "Cannot be empty.";
    }

    if (this.state.email === "") {
      errors.email = "Cannot be empty.";
    }

    this.setState({ errors, isValid: Object.keys(errors).length === 0 });
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (!this.state.isLoading) {
      this.setState({ isLoading: true });
      return this.props.mutate({
        variables: {
          attending: this.state.attending,
          email: this.state.email,
          primaryName: this.state.primaryName,
          otherNames: this.state.otherNames.split("\n"),
          comments: this.state.comments
        }
      }).then(({ data }) => {
        this.setState({
          isLoading: false,
          isSubmitted: true
        });
      });
    }
  }

  handleChange(e) {
    const { target: { name, type, value, checked } } = e;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    }, this.validate);
  }
  
  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Flex mx={-2}>
          <Box w={[1, 1/2]} px={2}>
            <Label htmlFor="primaryName">
              Your Full Name
              <Input id="primaryName" name="primaryName" value={this.state.primaryName} onChange={this.handleChange} />
            </Label>
          </Box>
          <Box w={[1, 1/2]} px={2}>
            <Label htmlFor="email">
              Your Email Address
              <Input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </Label>
          </Box>
        </Flex>
        <Flex mx={-2}>
          <Box w={[1, 1/2]} px={2}>
            <Label htmlFor="attending">
              Are you attending?
              <Box pt="4px">
                <Button type="button" size="small" color="green" variant={this.state.attending ? "solid" : undefined} onClick={() => this.setState({ attending: true })}>Yes</Button>
                <Button type="button" size="small" color="green" variant={!this.state.attending ? "solid" : undefined} onClick={() => this.setState({ attending: false })}>No</Button>
              </Box>
            </Label>
          </Box>
        </Flex>
        <Flex mx={-2}>
          <Box w={[1, 1/2]} px={2}>
            <Label htmlFor="otherNames">
              I am also RSVPing for the following people (one name per line)
              <TextArea id="otherNames" name="otherNames" value={this.state.otherNames} onChange={this.handleChange} />
            </Label>
          </Box>
        </Flex>
        <Flex mx={-2}>
          <Box w={[1, 1/2]} px={2}>
            <Label htmlFor="comments">
              Comments, food allergies, etc.
              <TextArea id="comments" name="comments" value={this.state.comments} onChange={this.handleChange} />
            </Label>
          </Box>
        </Flex>
        <Button
          color="green"
          type="submit"
          disabled={!this.state.isValid || this.state.isLoading}
        >
          {this.state.isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    );
  }

  renderConfirmation() {
    return (
      <Box style={{ textAlign: "center" }}>
        <P>Thank you for RSVPing!</P>
        {this.state.attending
          ? (
            <Fragment>
              <P>We look forward to seeing you at the wedding. 🎉</P>
              <P>
                If you need to make hotel accommodations, 
                please refer to the <Link href="#wedding-details">Details</Link> section for lodging 
                suggestions and other frequently asked questions.
              </P>
            </Fragment>
          )
          : <P>We'll miss you at the wedding, but we'll be sure to catch up with you in some other fashion. 😊</P>}
      </Box>
    )
  }
  
  render() {
    if (this.state.isSubmitted) {
      return this.renderConfirmation();
    }

    return this.renderForm();
  }
}

export default graphql(gql`
  mutation(
    $attending: Boolean!,
    $email: String!,
    $primaryName: String!,
    $otherNames: [String!]!,
    $comments: String!
  ) {
    createRsvp(
      attending: $attending,
      email: $email,
      primaryName: $primaryName,
      otherNames: $otherNames,
      comments: $comments
    ) {
      id
    }
  }
`)(Form);