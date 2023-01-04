import React from 'react';
import PropTypes from 'prop-types';


export const ContactsList = ({ contacts, onDelete }) => (
  <>
    {''}
    {contacts.length !== 0 && (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={name}>
            <p>
              {name}:{number}
            </p>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </>)

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactsList;


