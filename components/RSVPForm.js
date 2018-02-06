import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Button from "./Button";
import { FONTS } from "../constants";

const Label = styled.label`
  display: block;
  font-family: ${FONTS.textSans};
  font-size: 12px;
  text-transform: uppercase;
`;

const Input = styled.input`
  display: block;
`;

class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOtherNameChange = this.handleOtherNameChange.bind(this);
    this.state = {
      attending: true,
      email: "",
      primaryName: "",
      otherNames: [],
      comments: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.mutate({
      variables: {
        attending: this.state.attending,
        email: this.state.email,
        primaryName: this.state.primaryName,
        otherNames: this.state.otherNames,
        comments: this.state.comments
      }
    });
  }

  handleChange(e) {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value
    });
  }

  handleOtherNameChange(id) {
    return e => {

    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="primaryName">
          Your Full Name
          <Input id="primaryName" name="primaryName" value={this.state.primaryName} onChange={this.handleChange} />
        </Label>
        <Label htmlFor="attending">
          Are you attending?
          <Input id="attending" name="attending" value={this.state.attending} onChange={this.handleChange} />
        </Label>
        <Button color="green" type="submit">Submit</Button>
      </form>
    );
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
`)(RsvpForm);