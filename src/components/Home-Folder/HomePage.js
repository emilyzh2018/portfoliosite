// BlogPage.js
import React , { useEffect }from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"
import Typewriter from "typewriter-effect";
import earth from "./fart.png"
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import FlipCard from './FlipCard';
import {HeroScrollDemo} from "./demoscroll";
import { Spotlight } from "../ui/Spotlight";
import { BackgroundGradient } from "../ui/background-gradient";
import { useLocation } from 'react-router-dom';
import yomen from './yomm.jpg';
import mercy from './mercy.webp';
import { Size } from '@tsparticles/engine';
const HomePage = () => {
  const location = useLocation();
  const [isFlippedArray, setIsFlippedArray] = useState(new Array(6).fill(false));

  const handleCardClick = (index) => {
    const flippedArrayCopy = [...isFlippedArray]; // Make a copy of the array
    flippedArrayCopy[index] = !flippedArrayCopy[index]; // Toggle the flipped state for the clicked card
    setIsFlippedArray(flippedArrayCopy); // Update the state
  };
  useEffect(() => {
    if (location.hash === '#about-me') {
      const aboutMeSection = document.getElementById('about-me');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const [isFlipped, setIsFlipped] = useState(false);
  const cardInfo = [
    {
      front: (
        <>
      <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-white to-pink-300 text-transparent bg-clip-text">My School</span>
</h3>
          <p>I am currently a junior in Computer Science at the University of Maryland College Park!</p>
        </>
      ),
      back: (
        <>
            <h3><a class='text-default'href="https://umd.edu/"  target="_blank"
        rel="noreferrer">Learn More About This...</a></h3>
        </>
      ),
    },
    {
      front: (
        <>
            <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Hobbies</span>
</h3>
          <p>I like going to the gym (lifting,cardio) for fun/health, playing Overwatch 2, and coding! </p>
        </>
      ),
      back: (
        <>
         <img src={mercy} alt="Mercy"  />
      
       
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Pets</span>
</h3>
          <p>I have a dog (shiba inu) named Yomen! He is a male red shiba and very sweet, he acts like a cat basically. </p>
        </>
      ),
      back: (
        
        <> 
       
           <img src={yomen} class="mt-3 scale-200 rounded-lg" alt="Yomen, a sweet red Shiba Inu"  />
 
        </>
        
      ),className: 'no-padding',
      
    },
    {
      front: (
        <>
          <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
Music</span>
</h3>
          <p>I like various artists like Travis Scott, Playboi Carti, Don Toliver, Metro Boomin, SZA .</p>
        </>
      ),
      back: (
        <>
          <h3><a class='text-default'href="https://open.spotify.com/user/b59vd13mlimmlpqesv47atclz?si=2d97d56e17604726"  target="_blank"
        rel="noreferrer" >My Spotify</a></h3>
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
Career Interests</span>
</h3>
          <p>I am interested in full stack web development, AI and machine learning.</p>
        </>
      ),
      back: (
        <>
          <h3><a class='text-default'href="/ProjectsPage" >My Resume</a></h3>
         
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-2xl font-semibold mb-5 ">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
My Linkedin</span>
</h3>

          <p>I am interning this summer at Linkedin, click this card to find my Linkedin on the back!</p>
    
        </>
      ),
      back: (
        <>
      
  <a class='text-default'href="https://www.linkedin.com/in/emily-z-2803a2247/"target="_blank"
        rel="noreferrer" >My Linkedin</a>

       
        
        </>
      ),
    },
  ];
  
  return (
    



    <div className="full-width-container"> 
     
     
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-grey-900 to-black overflow-hidden">
   
      <div className="page-container">
     


     

      <div className="flex flex-col justify-center items-center min-h-screen">


      

        {/* Content that should be centered in the viewport */}
       

        <div className="text-white px-12 text-left">
      
          <h1 className="text-6xl font-bold mb-4 opacity-90" >Emily Zhao's Website</h1>
        
          <p className="text-lg mb-6 pt-10 font-bold opacity-100">
            
          <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Computer Science Student and aspiring Software Engineer').changeDelay(1).start();
                }}
                options={{
                  delay: 70,
                }}
              />
          </p>
          <Link to="/#about-me" className="learn-more-button">
            Learn More
          </Link>
       
        </div>
       
        
        
      </div >
      
    <div id="about-me"> 
      <h1 className="text-6xl ml-10 text-white font-bold mb-10 align-top">Stuff About Me</h1>

    
     
     {/* Grid of boxes */}

     <div className="grid-container " >
      
     {cardInfo.map((card, index) => (
      <div key={index} >
          <FlipCard
         
         frontText={card.front}
         backText={card.back}
         isFlipped={isFlippedArray[index]}
         handleClick={() => handleCardClick(index)} 
          />
           </div>
        ))}
   
      </div>
      <div >
      <HeroScrollDemo>
        
        </HeroScrollDemo>
        </div>
        </div>
    </div>
</div>
</div>
  );
};

export default HomePage;
