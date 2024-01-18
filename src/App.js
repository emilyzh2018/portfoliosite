// App.js or index.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from './components/TopNavbar';
import './index.css';
import ProductsPage from './components/Products-Folder/ProductsPage';
import AboutUsPage from './components/About-Folder/AboutUsPage';
import BlogPage from './components/Blog-Folder/BlogPage';
import ContactUsPage from './components/Contact-Folder/ContactUsPage';
import GetInvolvedPage from './components/Involved-Folder/GetInvolvedPage';
import Layout from './Layout'
import HomePage from './components/Home-Folder/HomePage';
import SupportUs from './components/Support-Folder/SupportUs';

function App() {
  return (
    <BrowserRouter>
    
      <TopNavbar />
     
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/ProductsPage" element={<ProductsPage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/SupportUsPage" element={<SupportUs />} />
          <Route path="/GetInvolvedPage" element={<GetInvolvedPage />} />
        </Routes>

     </BrowserRouter>
  );
}

export default App;
