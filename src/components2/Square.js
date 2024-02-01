// Square.js
import React from 'react';
import PropTypes from 'prop-types';



const Square = ({ size, color }) => {
  const squareStyle = {
    width: size || '50px', // Use '50px' as default if size is not provided
    height: size || '50px',
    backgroundColor: color,
    margin: '10px',
    display: 'inline-block',
    transition: 'transform 0.5s ease-in-out',
  };

  return <div style={squareStyle} />;
};

Square.propTypes = {
  size: PropTypes.string, // Make size optional
  color: PropTypes.string.isRequired,
};

export default Square;
