import React from 'react';
import PropTypes from 'prop-types';

export const ContactsList = ({ title, contacts = [], onDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {Array.isArray(contacts) &&
          contacts.length &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <span>{contact.name}:</span>
                <span>{contact.number}</span>
                <button type="button" onClick={() => onDelete(contact.id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
