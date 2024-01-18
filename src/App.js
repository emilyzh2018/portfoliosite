// App.js or index.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import './index.css';
import ProjectsPage from './components/Projects-Folder/ProjectsPage';
import AboutUsPage from './components/About-Folder/AboutUsPage';
import BlogPage from './components/Blog-Folder/BlogPage';
import ContactUsPage from './components/Contact-Folder/ContactUsPage';
import GetInvolvedPage from './components/Involved-Folder/GetInvolvedPage';
import Layout from './Layout'
import HomePage from './components/Home-Folder/HomePage';
import SupportUs from './components/Support-Folder/SupportUs';
import LandingPage from './components/Landing-Folder/LandingPage';
import EventsPage from './components/Events-Folder/EventsPage';
import SummerPrograms from './components/Blog-Folder/SummerPrograms';
import AfterSchool from './components/Afterschool-Folder/AfterSchooler';
import './styles/tailwind.css'; 
function App() {
  function NavbarLayout({ children }) {
    return (
      <>
        <TopNavbar />
        {children} 
      </>
    );
  }

  return (
    <BrowserRouter>
  



     
        <Routes>
   
        {/* Nesting the other routes under a common layout route */}
        <Route path="/" element={<LandingPage />} />
          <Route path="/HomePage"element={<NavbarLayout><HomePage /></NavbarLayout>} />
          <Route path="/ProjectsPage" element={<NavbarLayout><ProjectsPage /></NavbarLayout>} />
          <Route path="/AboutUsPage" element={<NavbarLayout><AboutUsPage /></NavbarLayout>} />
          <Route path="/BlogPage" element={<NavbarLayout><BlogPage /></NavbarLayout>} />
          <Route path="/ContactUsPage" element={<NavbarLayout><ContactUsPage /></NavbarLayout>} />
          <Route path="/SupportUsPage"element={<NavbarLayout><SupportUs /></NavbarLayout>} />
          <Route path="/EventsPage"element={<NavbarLayout><EventsPage /></NavbarLayout>} />
          <Route path="/SummerPrograms"element={<NavbarLayout><SummerPrograms /></NavbarLayout>} />
          <Route path="/AfterSchool"element={<NavbarLayout><AfterSchool /></NavbarLayout>} />
          <Route path="/GetInvolvedPage" element={<GetInvolvedPage />} />
        </Routes>

     </BrowserRouter>
  );
}

export default App;
