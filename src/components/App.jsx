// import { Container } from '@mui/system'
import React, { Component } from 'react'
// import { Component } from 'react';
import ContactForm from './Contacts/ContactsForm';
import ContactList from './Contacts/ContactList';
import { Filter } from './Contacts/FilterContacts';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleSubmit = obj => {
    const { contacts } = this.state;
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === obj.name.toLowerCase()
    );
    console.log(this.state.contacts)
    console.log(contacts)
    console.log(checkContact);
    if (!checkContact) {
      this.setState({ contacts: [...contacts, obj] });
      console.log(obj)
      // this.reset();
      return;
    }
    alert(`${obj.name} is already in contacts `);
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
        <ContactForm onSubmit={this.handleSubmit} contacts={this.props.contacts} />
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