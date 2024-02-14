// FlipCard.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { BackgroundGradient } from "../ui/background-gradient";
const FlipCard = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      
      <div className="grid-item" onClick={handleClick}>
        {/* front of the card */}
        
        {frontText}
      </div>
    
      <div className={`grid-item `} onClick={handleClick}>
        {/* back of the card */}
        {backText}
      </div>
    
    </ReactCardFlip>
  );
};

export default FlipCard;
