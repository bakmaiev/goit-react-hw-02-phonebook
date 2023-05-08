import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <span>Search contacts: </span>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
