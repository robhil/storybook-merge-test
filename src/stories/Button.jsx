import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({
  type,
  children
}) => {

  return (

    <button
      type={type}
      >
      {children}
    </button>

  );

};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  type: "default"
};

export default Button;