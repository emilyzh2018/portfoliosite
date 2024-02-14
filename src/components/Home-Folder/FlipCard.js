// FlipCard.js
import React from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({ isFlipped, handleClick, frontText, backText }) => {
  return (
    <div className="grid-combo">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="grid-item" onClick={handleClick}>
        {/* front of the card */}
        {frontText}
      </div>
      <div className="grid-item" onClick={handleClick}>
        {/* back of the card */}
        {backText}
      </div>
    </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
