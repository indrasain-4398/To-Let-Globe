// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">To-Let</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/services" className="text-white">Services</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/contact" className="text-white">Contact</Link>
          <Link to="/property" className="text-white">Property Listing</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
