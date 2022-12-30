import React from 'react';



export const ContactsList = ({ contacts, onDelete  }) => (
    <>
      {' '}
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
  

export default ContactsList;


