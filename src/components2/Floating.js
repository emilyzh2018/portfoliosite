// floating.js

import React, { useState, useEffect } from 'react';
import Square from './Square';

const Floating = () => {
    const [position, setPosition] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setPosition((prevPosition) => prevPosition + 60); // Move by 60px on each interval
      }, 1000);
  
      return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);
  
    return <Square color="blue" style={{ transform: `translateX(${position}px)` }} />;
  };
  
export default Floating;
