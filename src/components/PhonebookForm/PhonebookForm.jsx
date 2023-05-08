import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Btn,
  FormInput,
  FormLabel,
  StyledForm,
  StyledFormTitle,
} from './PhonebookForm.styled';
import { nanoid } from 'nanoid';

export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    this.setState({ id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledFormTitle>{this.props.title}</StyledFormTitle>
        <FormLabel>
          <span>Name: </span>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          <span>Number: </span>
          <FormInput
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Btn type="submit">Add contacts</Btn>
      </StyledForm>
    );
  }
}

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
