import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";
import sleek from "./sleek.png"; 
const LandingPage = () => {
  let navigate = useNavigate();

  const handleNewProcess = () => {
    navigate("/HomePage"); // This will navigate to the HomePage component
  };

  return (
    
    <div className="landing-bg">
       <div class="flex items-center h-screen">
    <h1 class="text-def">
      Developed by Emily Zhao
    </h1>
</div>

      <button className='lets-go' onClick={handleNewProcess}>Let's Go</button>

    
    </div>
    
  );
};

export default LandingPage;
