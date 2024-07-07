// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/property" element={<div>Property Listing Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;




