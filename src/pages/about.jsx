// src/pages/about.jsx
import React from "react";
import peopleImg from "../images/logistic5.jpg";
import containersImg from "../images/logistic8.jpg";
import shipImg from "../images/logistic6.jpg";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${peopleImg})` }}
      >
        <div className="bg-black/60 p-8 rounded text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Sky Logistics
          </h1>
          <p className="text-lg max-w-2xl">
            We connect businesses across the globe with reliable and efficient
            logistics solutions.
          </p>
        </div>
      </div>

      {/* Section: Our People */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-20 py-16 bg-white">
        <img
          src={peopleImg}
          alt="Our team"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our People</h2>
          <p className="text-lg">
            Our dedicated logistics team ensures every package is picked,
            packed, and delivered with precision. We prioritize customer
            satisfaction and handle each shipment like it's our own.
          </p>
        </div>
      </section>

      {/* Section: Infrastructure */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-20 py-16 bg-gray-100">
        <img
          src={containersImg}
          alt="Infrastructure"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Our Infrastructure</h2>
          <p className="text-lg">
            From storage yards to high-tech distribution centers, our
            infrastructure is built to scale with your needs. We operate with
            speed and accuracy through our streamlined logistics hubs.
          </p>
        </div>
      </section>

      {/* Section: Global Reach */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-20 py-16 bg-white">
        <img
          src={shipImg}
          alt="Global logistics"
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Global Reach</h2>
          <p className="text-lg">
            Whether by sea or air, Sky Logistics connects continents. We ship
            worldwide with partners in major trade regions, ensuring fast,
            reliable, and secure freight delivery wherever you need it.
          </p>
        </div>
      </section>

      {/* Section: Mission & Vision */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To provide seamless, cost-effective, and innovative logistics
                solutions that empower businesses to operate efficiently and
                grow globally.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the world's most trusted logistics partner, known for
                reliability, technology-driven operations, and exceptional
                customer service.
              </p>
            </div>
          </div>
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
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sky Logistics. All rights reserved.
        </div>
        <div className="text-center mt-2 text-sm text-gray-500">
          Follow us on{" "}
          <a
            href="https://twitter.com/skylogistics"
            className="text-blue-300 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/skylogistics"
            className="text-blue-300 hover:underline ml-2"
          >
            Facebook
          </a>
          , , and{" "}
          <a
            href="https://linkedin.com/company/skylogistics"
            className="text-blue-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;

// src/pages/about.jsx
// import React from "react";
// import peopleImg from "../images/logistic5.jpg";
// import containersImg from "../images/logistic8.jpg";
// import shipImg from "../images/logistic6.jpg";

// const About = () => {
//   return (
//     <div className="text-gray-800">
//       {/* Hero Section */}
//       <div
//         className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
//         style={{ backgroundImage: `url(${peopleImg})` }}
//       >
//         <div className="bg-black/60 p-8 rounded text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             About Sky Logistics
//           </h1>
//           <p className="text-lg max-w-2xl">
//             We connect businesses across the globe with reliable and efficient
//             logistics solutions.
//           </p>
//         </div>
//       </div>

//       {/* Section: Our People */}
//       <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-20 py-16 bg-white">
//         <img
//           src={peopleImg}
//           alt="Our team"
//           className="w-full md:w-1/2 rounded-lg shadow-md"
//         />
//         <div className="md:w-1/2">
//           <h2 className="text-3xl font-semibold mb-4">Our People</h2>
//           <p className="text-lg">
//             Our dedicated logistics team ensures every package is picked,
//             packed, and delivered with precision. We prioritize customer
//             satisfaction and handle each shipment like it's our own.
//           </p>
//         </div>
//       </section>

//       {/* Section: Infrastructure */}
//       <section className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 md:px-20 py-16 bg-gray-100">
//         <img
//           src={containersImg}
//           alt="Infrastructure"
//           className="w-full md:w-1/2 rounded-lg shadow-md"
//         />
//         <div className="md:w-1/2">
//           <h2 className="text-3xl font-semibold mb-4">Our Infrastructure</h2>
//           <p className="text-lg">
//             From storage yards to high-tech distribution centers, our
//             infrastructure is built to scale with your needs. We operate with
//             speed and accuracy through our streamlined logistics hubs.
//           </p>
//         </div>
//       </section>

//       {/* Section: Global Reach */}
//       <section className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-20 py-16 bg-white">
//         <img
//           src={shipImg}
//           alt="Global logistics"
//           className="w-full md:w-1/2 rounded-lg shadow-md"
//         />
//         <div className="md:w-1/2">
//           <h2 className="text-3xl font-semibold mb-4">Global Reach</h2>
//           <p className="text-lg">
//             Whether by sea or air, Sky Logistics connects continents. We ship
//             worldwide with partners in major trade regions, ensuring fast,
//             reliable, and secure freight delivery wherever you need it.
//           </p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 mt-12">
//         <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-xl font-bold">Sky Logistics</h3>
//             <p className="text-sm mt-2 text-gray-400">
//               Delivering trust and efficiency, globally.
//             </p>
//           </div>
//           <div className="space-x-6 text-sm">
//             <a href="#" className="hover:underline">
//               Home
//             </a>
//             <a href="#" className="hover:underline">
//               Services
//             </a>
//             <a href="#" className="hover:underline">
//               Contact
//             </a>
//           </div>
//         </div>
//         <div className="text-center mt-6 text-sm text-gray-500">
//           &copy; {new Date().getFullYear()} Sky Logistics. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="text-gray-800 bg-white">
//       {/* Hero Section */}
//       <section className="bg-blue-900 text-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl font-bold mb-4">About Sky Logistics</h1>
//           <p className="text-lg max-w-2xl mx-auto">
//             Connecting businesses to the world with smart, reliable logistics
//             solutions.
//           </p>
//         </div>
//       </section>

//       {/* Company Overview */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-6 md:px-12 lg:px-20">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
//             <p className="mb-4">
//               Sky Logistics is a global logistics company specializing in fast,
//               secure, and scalable supply chain solutions. From local deliveries
//               to international freight, we ensure your cargo moves swiftly and
//               safely—every step of the way.
//             </p>
//             <p>
//               We work with businesses of all sizes across industries, including
//               retail, manufacturing, e-commerce, and healthcare. Our team blends
//               industry expertise with modern tech to streamline your shipping
//               process.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 md:px-12 lg:px-20">
//           <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-blue-800">
//                 Our Mission
//               </h3>
//               <p>
//                 To empower global trade through smart, sustainable, and scalable
//                 logistics solutions. We aim to make global logistics simple,
//                 reliable, and accessible to businesses everywhere.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-blue-800">
//                 Our Vision
//               </h3>
//               <p>
//                 To be the most trusted and innovative logistics partner in the
//                 world—enabling businesses to grow without limits.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-6 md:px-12 lg:px-20">
//           <h2 className="text-3xl font-semibold text-center mb-12">
//             What We Do
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//             {[
//               {
//                 title: "Freight Forwarding",
//                 description:
//                   "End-to-end air, sea, and road freight solutions tailored for speed and reliability.",
//               },
//               {
//                 title: "Warehousing & Distribution",
//                 description:
//                   "Strategically located warehouses with real-time inventory visibility and flexible distribution.",
//               },
//               {
//                 title: "Customs Clearance",
//                 description:
//                   "Hassle-free international shipping with complete customs compliance and documentation support.",
//               },
//               {
//                 title: "E-Commerce Fulfillment",
//                 description:
//                   "Integrated logistics for online sellers with fast order processing and delivery.",
//               },
//               {
//                 title: "Supply Chain Management",
//                 description:
//                   "Optimized end-to-end supply chain visibility and coordination for your business.",
//               },
//               {
//                 title: "Last-Mile Delivery",
//                 description:
//                   "Efficient last-mile solutions to get packages to your customers on time, every time.",
//               },
//             ].map((service, idx) => (
//               <div key={idx} className="bg-white shadow-sm p-6 rounded-lg">
//                 <h4 className="text-xl font-semibold mb-2 text-blue-700">
//                   {service.title}
//                 </h4>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-10">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2025 Sky Logistics. All rights reserved.</p>
//           <p className="mt-2">
//             Follow us on{" "}
            // <a
            //   href="https://twitter.com/skylogistics"
            //   className="text-blue-300 hover:underline"
            // >
            //   Twitter
            // </a>
//             ,{" "}
            // <a
            //   href="https://facebook.com/skylogistics"
            //   className="text-blue-300 hover:underline"
            // >
            //   Facebook
            // </a>
            // , and{" "}
            // <a
            //   href="https://linkedin.com/company/skylogistics"
            //   className="text-blue-300 hover:underline"
            // >
            //   LinkedIn
            // </a>
//             </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;

// import React, { useState } from "react";

// const About = () => {
//   const [info, setInfo] = useState("This is the about page.");

//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>{info}</p>
//     </div>
//   );
// };

// export default About;
