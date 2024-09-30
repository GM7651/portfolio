'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Replace with your actual service ID, template ID, and public key from EmailJS
    emailjs.sendForm('service_xxx', 'template_xxx', e.target, 'user_xxx')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Failed to send the email', error.text);
        alert('Failed to send message. Please try again later.');
      });
    
    e.target.reset();
  };

  return (
    <div className='w-full  mt-16 max-w-md mx-auto shadow-lg p-4 md sm:max-w-xl md:max-w-xl lf:max-w-xl'>
      <h2 className='text-2xl font-bold text-center mb-4'>Contact Me</h2>
      <form onSubmit={sendEmail} className='space-y-8'>
        <div>
          <label className='block ml-2 text-sm font-medium text-gray-700'>Name</label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            value={formData.name}
            className='w-[400px] p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div>
          <label className='block ml-2  text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
            className='w-[400px] p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div>
          <label className='block ml-2  text-sm font-medium text-gray-700'>Message</label>
          <textarea
            name='message'
            onChange={handleChange}
            value={formData.message}
            className='w-[400px] p-2 border border-gray-300 rounded-lg'
            required
          />
        </div>
        <div>
          <button
            type='submit'
            className='w-[400px] mr-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
