// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Services from './components/Services';
import Projects from './components/project';
import About from './components/about'; // Assuming you have this component
import Contact from './components/ContactForm'; // Assuming you have this component
import Home from './pages/home'; // Assuming you have this component
import Footer from './components/footer'; // Assuming you have this component
import BlogPage from './components/BlogPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/about" element={<About />} />
           <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
