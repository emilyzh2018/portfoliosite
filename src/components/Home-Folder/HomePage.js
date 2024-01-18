// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"
import Typewriter from "typewriter-effect";
import earth from "./fart.png"
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import FlipCard from './FlipCard';
const HomePage = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const cardInfo = [
    {
      front: (
        <>
      <h3 class="text-xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Afterschool Programs</span>
</h3>
          <p>We are in the process of starting Spring afterschool programs at elementary and primary elementary schools!</p>
        </>
      ),
      back: (
        <>
           <h3 class="text-xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Afterschool Programs</span>
</h3>
          <p>We are in the process of starting Spring afterschool programs at elementary and primary elementary schools!</p>
        </>
      ),
    },
    {
      front: (
        <>
            <h3 class="text-xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Summer Camps</span>
</h3>
          <p>Join us this summer for the Climate Health Education Initiative Summer Camp! We will have in person and virtual options.</p>
        </>
      ),
      back: (
        <>
          <h3>Back of Card 2</h3>
          <p>PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO </p>
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Blog</span>
</h3>
          <p>Check out our blog that features writing from our Writing and Newsletter Teams! </p>
        </>
      ),
      back: (
        <>
          <h3>Back of Card 3</h3>
          <p>PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO PEE PEE POO </p>
        </>
      ),
    },
    {
      front: (
        <>
          <h3 class="text-xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
Social Media</span>
</h3>
          <p>We utilize various social media platforms such as Instagram to educate the general public.</p>
        </>
      ),
      back: (
        <>
          <h3><a class='text-default'href="https://www.instagram.com/climatehealthei/"  target="_blank"
        rel="noreferrer" >Follow Our Instagram!</a></h3>
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
Events</span>
</h3>
          <p>Join us for several events featuring guest speakers of the environmental and public health fields. </p>
        </>
      ),
      back: (
        <>
          <h3><a class='text-default'href="/EventsPage" >Learn More About This...</a></h3>
         
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-xl font-semibold mb-6 ">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
  Fundraisers and donations</span>
</h3>
<h3 class="text-base">
          <p>We often host fundraisers and organize donations fundraise for our initiative as well as other organizations such as the Sierra Club!</p>
          </h3>
        </>
      ),
      back: (
        <>
      
  <a class='text-default'href="/SupportUsPage" >Learn More About This...</a>

       
        
        </>
      ),
    },
  ];
  
  return (



    <div className="full-width-container"> 
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-indigo-800 to-fuchsia-900 overflow-hidden">
      <div className="page-container">





      <div className="flex flex-col justify-center items-center min-h-screen">


      

        {/* Content that should be centered in the viewport */}
       <div className='earthy'>
        <img  src={earth} className="earthy align-right" alt="Logo" />
        </div>

        <div className="text-white px-12 text-left">
          <h1 className="text-6xl font-bold mb-4 opacity-80">Climate Health Education Initiative</h1>
          <p className="text-lg ml-10 mb-6 pt-10 font-bold opacity-100">
          <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Democratizing environmental and public health education.').changeDelay(1).start();
                }}
                options={{
                  delay: 50,
                }}
              />
          </p>
          <Link to="/AboutUsPage" className="learn-more-button">
            Learn More
          </Link>
        </div>
      </div>
      
      <h1 className="text-6xl ml-10 text-white font-bold mb-4 ">What We Do</h1>

    

     {/* Grid of boxes */}
     <div className="grid-container">
      
     {cardInfo.map((card, index) => (
          <FlipCard
            key={index}
            frontText={card.front}
            backText={card.back}
          />
        ))}
   
      </div>
    </div>
</div>
</div>
  );
};

export default HomePage;
