import React, { Component } from 'react';
import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.some(el => el.name === contact.name)) {
      alert(`${contact.name} is already exist!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  filterContact = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <PhonebookForm title="Phonebook" onSubmit={this.addContact} />
        <ContactsList
          title="Contacts"
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
        <Filter
          filter={this.state.filter}
          onChange={this.filterContact}
        ></Filter>
      </>
    );
  }
}
