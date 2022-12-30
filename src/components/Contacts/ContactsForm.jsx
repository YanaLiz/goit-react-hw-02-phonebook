
import React, {Component} from "react";
import css from './Styles.module.css'
import { nanoid } from "nanoid";


class ContactForm extends Component {
  state = {
    contacts: [
],
    name: '',
    number: '',
    }
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    const obj = { name: name, number: number, id: nanoid() };
    onSubmit(obj);
    this.reset();
  }

  reset=()=>{
    this.setState({name: '', number: ''})
}

  render() {
    
    return (
        <form onSubmit={this.handleSubmit} className={css.form} action="">
          <label className={css.label} htmlFor={this.nameInputId}>
            Name{' '}
            <input
          className={css.input}
          id={this.nameInputId}  
          type="text"
          name="name" 
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />{' '}
          </label>
          <label className={css.label} htmlFor={this.numberInputId}>
            Phone 
            <input
            className={css.input}
            id={this.numberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />{' '}
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
    )
  }
}
export default ContactForm;

