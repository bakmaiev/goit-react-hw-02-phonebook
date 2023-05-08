import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './PhonebookForm.styled';
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
        <h1>{this.props.title}</h1>
        <label>
          <span>Name: </span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number: </span>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contacts</button>
      </StyledForm>
    );
  }
}

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
