import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"

// Import images from local folder
import Logistic1 from "../images/logistic1.jpg";
import Logistic2 from "../images/logistic2.jpg";
import Logistic3 from "../images/logistic3.jpg";
import Logistic4 from "../images/logistic4.jpg";
import Logistic5 from "../images/logistic5.jpg";

const services = [
  {
    title: "Expedited Courier",
    desc: "Same-day pickup & delivery with real-time updates.",
  },
  {
    title: "Freight Management",
    desc: "LTL, FTL, air & sea freight—secure and optimized.",
  },
  {
    title: "Warehouse Solutions",
    desc: "Inventory management, fulfillment & JIT logistics.",
  },
];

const testimonials = [
  {
    name: "John Doe",
    content: "SkyLogistics consistently delivers ahead of schedule.",
  },
  {
    name: "Acme Corp.",
    content: "Their real-time tracking transformed our supply chain.",
  },
];

// Mock tracking data for demonstration
const mockTrackingData = {
  ABC123: {
    status: "In Transit",
    location: "Lagos, NG",
    estimatedDelivery: "2025-08-01",
  },
  XYZ789: {
    status: "Delivered",
    location: "Abuja, NG",
    estimatedDelivery: "2025-07-20",
  },
};

const TrackShipment = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setError("");
    setResult(null);
    const key = trackingId.trim().toUpperCase();

    if (!key) {
      setError("Please enter a valid tracking ID.");
      return;
    }

    const data = mockTrackingData[key];
    if (data) {
      setResult(data);
    } else {
      setError("Tracking ID not found. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold break-all mb-4 text-blue-800 text-center">
          Track Your Shipment
        </h1>

        <div className="flex items-center border border-gray-300 rounded overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Enter Tracking ID (e.g., ABC123)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1 px-4 py-2 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-800 text-white px-4 py-2 hover:bg-blue-700 transition-all"
          >
            <CiSearch size={20} />
          </button>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {result && (
          <div className="bg-blue-50 border-l-4 border-blue-800 p-4 rounded">
            <p>
              <strong>Status:</strong> {result.status}
            </p>
            <p>
              <strong>Location:</strong> {result.location}
            </p>
            <p>
              <strong>Estimated Delivery:</strong> {result.estimatedDelivery}
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-800 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
    {/* Hero Section */}
    <header className="relative bg-blue-800 text-white text-center p-10 overflow-hidden">
      <img
        src={Logistic1}
        alt="Delivery truck on road"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SkyLogistics</h1>
        <p className="text-xl">
          Delivering beyond expectations—on time, every time.
        </p>
          <button className="py- px-4 bg-white absolute left-235 top-47 rounded-2xl hover:bg-green-200">
           <Link to="/customerservice" className="text-blue-800 hover:underline">
             CustomerService
           </Link>
          </button>
          {/* /* <select className="absolute left-240 top-47">
            <option value="">Customer Service</option>
          </select> */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="absolute left-185 top-47 text-center border border-amber-300 focus:outline-none hover:bg-green-200 bg-white text-blue-800 rounded-2xl"
          />
        </div>
        <Link
          to="/trackshipment"
          className="mt-6 inline-block bg-white text-blue-800 px-6 py-3 font-semibold rounded hover:bg-gray-100"
        >
          TrackShipment
        </Link>
      </div>
    </header>

    {/* Services Section */}
    <section className="py-12 px-6 md:px-16 bg-white text-gray-800">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Warehouse Logistics Section */}
    <section className="py-12 px-6 md:px-16 bg-gray-100 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Warehouse Logistics</h2>
        <p className="text-gray-700">
          From inventory to dispatch, our warehouse logistics ensure efficiency
          and control.
        </p>
      </div>
      <img
        src={Logistic2}
        alt="Warehouse logistics"
        className="rounded-lg shadow-md w-full md:w-1/2"
      />
    </section>

    {/* Route Optimization Section */}
    <section className="py-12 px-6 md:px-16 bg-white flex flex-col-reverse md:flex-row items-center gap-8">
      <img
        src={Logistic3}
        alt="Delivery route plan"
        className="rounded-lg shadow-md w-full md:w-1/2"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Smart Route Optimization</h2>
        <p className="text-gray-700">
          Real-time algorithms calculate the fastest delivery paths to save time
          and fuel.
        </p>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-12 px-6 md:px-16 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Why Choose SkyLogistics?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          "Nationwide Reach",
          "Real-Time Tracking",
          "Affordable Rates",
          "Dedicated Support",
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">{item}</h3>
            <p>Learn how we excel at {item.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-12 px-6 md:px-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-blue-100 p-6 rounded shadow">
            <p className="italic text-lg mb-2">“{t.content}”</p>
            <p className="font-bold text-blue-800">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-12 px-6 md:px-16 bg-blue-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Ready to Ship Smarter?</h2>
        <p className="text-blue-100 mb-4">
          Sign up now to simplify your logistics journey.
        </p>
        <button className="bg-white text-blue-800 px-6 py-2 font-semibold rounded hover:bg-blue-100">
          <Link to="/getstarted" className="text-blue-800 hover:underline">
            GetStarted
          </Link>
        </button>
      </div>
      <img
        src={Logistic4}
        alt="Logistics CTA"
        className="rounded-lg w-full md:w-1/2 shadow-md"
      />
    </section>

    {/* Footer */}
    <footer className="relative bg-gray-900 text-gray-300 text-center py-6">
      <img
        src={Logistic5}
        alt="Logistics background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10">
        <p>
          &copy; {new Date().getFullYear()} SkyLogistics. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);



export default Home;
