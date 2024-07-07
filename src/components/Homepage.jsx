// src/components/Homepage.jsx
import React from 'react';
import Navbar from './Navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
          <div className="mt-4">
            <h2 className="text-2xl">Get in Touch</h2>
            <p>Contact us for more information.</p>
          </div>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.846637889497!2d80.98062567457987!3d26.844829763006025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3215c70c70bacf5%3A0xaa05a51007a5a463!2sTo-Let%20Globe%20-%20Headquarter%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1720349021901!5m2!1sen!2sin" width="600" height="450"  allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"
            //   width="600"
            //   height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-64 mt-4"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
