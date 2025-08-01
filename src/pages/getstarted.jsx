import React from "react";
import heroImg from "../images/logistic1.jpg"; // Use a clean header image

const GetStarted = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="h-[75vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started with Sky Logistics
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Launch your logistics journey today — reliable, global, and tailored
            for your business.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white text-lg rounded-md shadow">
            Start Shipping
          </button>
        </div>
      </div>

      {/* Features / Benefits Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Choose Sky Logistics?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
            <p className="text-gray-600">
              We deliver on time, every time — by land, air, or sea.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Global Network</h3>
            <p className="text-gray-600">
              Access worldwide shipping routes and partnerships.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
            <p className="text-gray-600">
              Our team is here to assist you at every step of your shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact / CTA Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Move Your Cargo?
          </h2>
          <p className="mb-6 text-gray-700">
            Create your account and start managing your shipments effortlessly.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-md"
          >
            Create Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Sky Logistics</h3>
            <p className="text-sm mt-2 text-gray-400">
              Delivering trust and efficiency, globally.
            </p>
          </div>
          <div className="space-x-6 text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sky Logistics. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
