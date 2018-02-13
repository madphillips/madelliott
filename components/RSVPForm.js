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
    this.validate = this.validate.bind(this);
    this.state = {
      isLoading: false,
      isSubmitted: false,
      isValid: false,
      attending: true,
      email: "",
      primaryName: "",
      otherNames: {},
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
    e.preventDefault();
    this.setState({ isLoading: true });
    return this.props.mutate({
      variables: {
        attending: this.state.attending,
        email: this.state.email,
        primaryName: this.state.primaryName,
        otherNames: Object.values(this.state.otherNames),
        comments: this.state.comments
      }
    }).then(({ data }) => {
      this.setState({
        isLoading: false,
        isSubmitted: true
      });
    });
  }

  handleChange(e) {
    const { target: { name, type, value, checked } } = e;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    }, this.validate);
  }

  handleOtherNameChange(id) {
    return e => {
      const { target: { type, value, checked } } = e;
      this.setState(prevState => ({
        otherNames: {
          ...prevState.otherNames,
          [id]: value
        }
      }));
    }
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="primaryName">
          Your Full Name
          <Input id="primaryName" name="primaryName" value={this.state.primaryName} onChange={this.handleChange} />
        </Label>
        <Label htmlFor="primaryName">
          Your Email Address
          <Input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </Label>
        <Label htmlFor="attending">
          Are you attending?
          <input type="checkbox" id="attending" name="attending" checked={this.state.attending} onChange={this.handleChange} />
        </Label>
        <Button color="green" type="submit" disabled={!this.state.isValid}>Submit</Button>
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