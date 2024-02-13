// BlogPage.js
import React from 'react';
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
const HomePage = () => {

  const [isFlipped, setIsFlipped] = useState(false);
  const cardInfo = [
    {
      front: (
        <>
      <h3 class="text-2xl font-semibold mb-5">
  <span class="bg-gradient-to-r from-black to-pink-300 text-transparent bg-clip-text">Afterschool Programs</span>
</h3>
          <p>We are in the process of starting Spring afterschool programs at elementary and primary elementary schools!</p>
        </>
      ),
      back: (
        <>
            <h3><a class='text-default'href="/AfterSchool" >Learn More About This...</a></h3>
        </>
      ),
    },
    {
      front: (
        <>
            <h3 class="text-2xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Summer Camps</span>
</h3>
          <p>Join us this summer for the Climate Health Education Initiative Summer Camp! We will have in person and virtual options.</p>
        </>
      ),
      back: (
        <>
           <h3><a class='text-default'href="/SummerPrograms" >Learn More About This...</a></h3>
       
        </>
      ),
    },
    {
      front: (
        <>
         <h3 class="text-2xl font-semibold mb-8">
  <span class="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">Blog</span>
</h3>
          <p>Check out our blog that features writing from our Writing and Newsletter Teams! </p>
        </>
      ),
      back: (
        <>
           <h3><a class='text-default'href="/SummerPrograms" >Learn More About This...</a></h3>
        </>
      ),
    },
    {
      front: (
        <>
          <h3 class="text-2xl font-semibold mb-8">
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
         <h3 class="text-2xl font-semibold mb-8">
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
         <h3 class="text-2xl font-semibold mb-6 ">
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
     
     
    <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-grey-900 to-black overflow-hidden">
   
      <div className="page-container">
      <Spotlight
        className="-top-40 left-0 md:left-10 md:-top-20"
        fill="white"
      />


     

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
          <Link to="/AboutUsPage" className="learn-more-button">
            Learn More
          </Link>
       
        </div>
        
        
      </div>
      
      <HeroScrollDemo>
        
        </HeroScrollDemo>
     
      <h1 className="text-6xl ml-10 text-white font-bold mb-4 align-top">What We Do</h1>

    
     
     {/* Grid of boxes */}

     <div className="grid-container" style={{ marginBottom: '0px' }}>
      
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
