
import { Component } from 'react';
import  ContactsForm from './Contacts/ContactsForm';
import Form from './Contacts/Form'
import  Filter  from './Contacts/FilterContacts';

// import { nanoid } from 'nanoid';

export class App extends Component{
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  addContacts = contactsId => {
    console.log(contactsId)

  }

  formSubmitHandler = data => {
    console.log(data)
  }
  changeFilter = e => {
    this.setState({filter:e.currentTarget.value})
  }
  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase;
  //   return this.state.contacts.filter(contacts =>
  //     contacts.text.toLowerCase().includes(normalizedFilter),
  //     )
  // }

  render() {
    // const visibleContacts=this.getVisibleContacts()
    return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
        {/* <ContactsForm onSubmit={this.addContacts} /> */}
        {/* <Filter/> */}
        <Filter value={this.filter} onChange={this.changeFilter} />
        <ContactsForm onDelete={this.handleDelete} contacts={this.contacts} />
    </div>
  );

  }
}













