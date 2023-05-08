import React from 'react';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts = [], onDelete }) => {
  return (
    <div>
      <ul>
        {Array.isArray(contacts) &&
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
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
