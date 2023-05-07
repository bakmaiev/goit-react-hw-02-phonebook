import React from 'react';
import PropTypes from 'prop-types';

export const ContactsList = ({ title }, contacts = [], onDelete, filter) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {Array.isArray(contacts) &&
          contacts.length &&
          contacts.map(contact => {
            return (
              <li>
                {contact.name}: {contact.number}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {};
