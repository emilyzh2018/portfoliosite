// BlogPage.js
import React from 'react';
import resume from "./resumepic.jpg"
const ProjectsPage = () => {
  return (
 
       <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-grey-800 to-black h-screen ">
       <div className="flex justify-center items-center h-screen">
      <img src={resume} alt="My Resume" className="max-w-full h-auto md:max-w-lg rounded-md shadow-lg shadow-white/40 " />
  {/*     <a 
        href={resume} 
        download="YourName_Resume.pdf"
        className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
      >
        Download Resume
      </a>
 */}
    </div>
  

       </div>
  

  );
};

export default ProjectsPage;
