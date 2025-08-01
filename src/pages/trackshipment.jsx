import React, { useState } from "react";

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    setError("");
    setShipmentDetails(null);

    // Simulate API response (replace with actual API call)
    if (trackingNumber === "SKY123456") {
      setShipmentDetails({
        trackingNumber: "SKY123456",
        status: "In Transit",
        origin: "New York, USA",
        destination: "Lagos, Nigeria",
        estimatedDelivery: "July 29, 2025",
        lastLocation: "London, UK",
      });
    } else {
      setError("Tracking number not found. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Track Your Shipment
        </h2>
        <form onSubmit={handleTrack} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Tracking Number
            </label>
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="e.g. SKY123456"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Track Shipment
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-6 text-red-600 text-sm text-center">{error}</div>
        )}

        {/* Shipment Result */}
        {shipmentDetails && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
              Shipment Details
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Tracking Number:</span>{" "}
                {shipmentDetails.trackingNumber}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {shipmentDetails.status}
              </p>
              <p>
                <span className="font-medium">Origin:</span>{" "}
                {shipmentDetails.origin}
              </p>
              <p>
                <span className="font-medium">Destination:</span>{" "}
                {shipmentDetails.destination}
              </p>
              <p>
                <span className="font-medium">Last Known Location:</span>{" "}
                {shipmentDetails.lastLocation}
              </p>
              <p>
                <span className="font-medium">Estimated Delivery:</span>{" "}
                {shipmentDetails.estimatedDelivery}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackShipment;

// // pages/TrackShipment.js
// import React, { useState } from "react";

// const TrackShipment = () => {
//   const [trackingId, setTrackingId] = useState("");
//   const [result, setResult] = useState(null);

//   const handleTrack = () => {
//     const shipments = JSON.parse(localStorage.getItem("shipments") || "[]");
//     const found = shipments.find((s) => s.id === trackingId.toUpperCase());
//     setResult(found);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Tracking ID"
//         onChange={(e) => setTrackingId(e.target.value)}
//       />
//       <button onClick={handleTrack}>Track</button>
//       {result ? (
//         <p>Status: {result.status}</p>
//       ) : (
//         trackingId && <p>No shipment found.</p>
//       )}
//     </div>
//   );
// };

// export default TrackShipment;
