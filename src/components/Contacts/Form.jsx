



// import React, {Component} from "react";
// import { nanoid } from 'nanoid';
// import css from './Styles.module.css'


// class Form extends Component{
//     state={
//     name: '',
//     tel: ''
//     }

//     // nameInputId = nanoid()
//     // numberInputId=nanoid()

//     handleChange = event => {
//         const { name } = event.currentTarget.name;
//         const { value}=event.currentTarget.value
//     this.setState({ [name]: value });
//     }

//     handleSubmit = event => {
//     event.preventDefault();
//         const { name, tel } = this.state;
//         const { changeAppState } = this.props;

//         const object = { name: name, tel: tel, id: nanoid() }
//         changeAppState(object)
//         this.reset();
//         console.log('form')

// }

// reset=()=>{
//     this.setState({name: '', number: ''})
// }

//     render(){
//         return (
            
//          <form className={css.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>Name
//         <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             id={this.nameInputId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//         />
//         </label>
//         <label htmlFor={this.numberInputId}>Number
//         <input
//             type="number"
//             name="tel"
//             value={this.state.number}
//             onChange={this.handleChange}
//             id={this.numberInputId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//         />{' '}
//         </label>
//         <button type="submit">Add contact</button>
//     </form> 
//         )

//     }
// }
// export default Form;


