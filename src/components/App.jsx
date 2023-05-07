import React, { Component } from 'react';
import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = bookData => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, bookData],
    }));
    console.log(bookData);
  };

  render() {
    return (
      <>
        <PhonebookForm title="Phonebook" onSubmit={this.addContact} />
        <ContactsList title="Contacts" contacts={this.state.contacts} />
      </>
    );
  }
}
