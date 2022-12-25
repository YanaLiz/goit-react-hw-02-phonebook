import { Component } from 'react';
// import { Form } from './Form'
// import Form from '../Form/Form'



class ContactsForm extends Component{
  state = {
    contacts: '',
    filter: ''
  }
  handleChange = e => {
    this.setState({contacts:e.currentTarget.value})
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <textarea className=""
          value={this.state.contacts}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="button">add</button>
      </form>
    )
  }
  }

export default ContactsForm;




