import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./App.css";
import ImageGallery from './ImageGallery';
import CoreStrength from "./coreStrength";
import Footer from "./footer";
import MainContent from "./mainContent";
import Navbar from "./navbar";
import UserInputModal from "./UserInputModal";
import Home from "./Home";
import Projects from './Projects';
import Legacy from './Legacy';
import Leadership from './Leadership.js';
import Cemailjs from './Emailjs.js';

function App() {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/legacy" element={<Legacy />} />
            <Route path="/projects" element={<Projects />} />
  <Route path="/cemailjs" element={<Cemailjs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
