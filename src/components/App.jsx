// import { Container } from '@mui/system'
import React, { Component } from 'react'
// import { Component } from 'react';
import ContactForm from './Contacts/ContactsForm';
import ContactList from './Contacts/ContactList';
import { Filter } from './Contacts/FilterContacts';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: ''
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = object => {
    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === object.name.toLowerCase()
    );

    console.log(checkContact);
    if (!checkContact) {
      this.setState({ contacts: [...contacts, object] });
      console.log(object)
      return;
    }
    alert(`${object.name} is already in contacts `);
  }


  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }))
  }


  visibileContacts = () => {
    const { contacts, filter } = this.state;
    const normalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalize)
    );
  };
  render() {
    const visibileContacts = this.visibileContacts();
    console.log(this.state);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filterName={this.changeFilter} value={this.state.filter} />
        <ContactList
          contacts={visibileContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }

};

