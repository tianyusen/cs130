import React from 'react';
import './style.css';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, onClick }) => (
  <button
    className="test"
    style={buttonStyles}
    onClick={onClick}
  >
    <i className="fa fa-bars"/>
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
