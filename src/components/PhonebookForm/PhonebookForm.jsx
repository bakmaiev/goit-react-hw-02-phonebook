import React, { Component } from 'react';
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

    const bookData = this.state;

    this.props.onSubmit(bookData);

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
        <h2>{this.props.title}</h2>
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
        <button onSubmit={this.handleSubmit} type="submit">
          Add contacts
        </button>
      </StyledForm>
    );
  }
}
