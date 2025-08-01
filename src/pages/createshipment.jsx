import React, { useState } from "react";

const CreateShipment = () => {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    origin: "",
    destination: "",
    weight: "",
    shipmentType: "Air Freight",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    console.log("Shipment created:", formData);
    alert("Shipment successfully created!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Create New Shipment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sender Name
            </label>
            <input
              type="text"
              name="sender"
              value={formData.sender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Receiver */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Receiver Name
            </label>
            <input
              type="text"
              name="receiver"
              value={formData.receiver}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Package Weight (KG)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Shipment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shipment Type
            </label>
            <select
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Air Freight</option>
              <option>Sea Freight</option>
              <option>Road Freight</option>
              <option>Express</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Create Shipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateShipment;

// pages/CreateShipment.js
// import React, { useState } from "react";

// const CreateShipment = () => {
//   const [shipment, setShipment] = useState({
//     sender: "",
//     receiver: "",
//     id: "",
//   });

//   const handleCreate = (e) => {
//     e.preventDefault();
//     shipment.id = Math.random().toString(36).substr(2, 6).toUpperCase();
//     shipment.status = "In Transit";

//     const shipments = JSON.parse(localStorage.getItem("shipments") || "[]");
//     shipments.push(shipment);
//     localStorage.setItem("shipments", JSON.stringify(shipments));

//     alert(`Shipment Created! Tracking ID: ${shipment.id}`);
//   };

//   return (
//     <form onSubmit={handleCreate}>
//       <input
//         type="text"
//         placeholder="Sender"
//         onChange={(e) => setShipment({ ...shipment, sender: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Receiver"
//         onChange={(e) => setShipment({ ...shipment, receiver: e.target.value })}
//       />
//       <button type="submit">Create Shipment</button>
//     </form>
//   );
// };

// export default CreateShipment;
