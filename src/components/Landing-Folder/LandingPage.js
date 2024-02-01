import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LandingPage.css";
import sleek from "./sleek.png"; 
import "./LandingPage.css"; 
import {BackgroundBoxesDemo} from "./pee";
const LandingPage = () => {
  let navigate = useNavigate();

  const handleNewProcess = () => {
    navigate("/HomePage"); // This will navigate to the HomePage component
  };

  return (
    
 
<BackgroundBoxesDemo>




  


</BackgroundBoxesDemo>
     
    
 
    
  );
};

export default LandingPage;
