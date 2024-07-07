// src/components/ContactPage.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call
    console.log('Form data:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-2 p-2 border rounded"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-2 p-2 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              className="w-full mt-2 p-2 border rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Topic</label>
            <select
              name="topic"
              className="w-full mt-2 p-2 border rounded"
              value={formData.topic}
              onChange={handleChange}
            >
              <option value="">Select a topic</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full mt-2 p-2 border rounded"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
