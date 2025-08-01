import React, { useState, } from "react";



const ContactForm = () => (
  <div className="bg-white shadow-lg p-6 rounded-lg max-w-2xl mx-auto my-10">
    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-3 rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-3 rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full border p-3 rounded h-32"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  </div>
);
export default ContactForm;
