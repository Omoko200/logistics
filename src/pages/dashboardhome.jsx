import React from "react";

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-yellow-500 p-6">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-900">
          Welcome to Sky Logistics Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your shipments and logistics activity in one place.
        </p>
      </header>

      {/* Dashboard Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Shipments", value: 1280 },
          { label: "In Transit", value: 342 },
          { label: "Delivered", value: 912 },
          { label: "Pending", value: 26 },
        ].map((metric, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600"
          >
            <p className="text-sm text-gray-500">{metric.label}</p>
            <h3 className="text-2xl font-semibold text-blue-800">
              {metric.value}
            </h3>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Create Shipment",
              description: "Start a new shipment order.",
              link: "/createshipment",
              color: "bg-blue-100 text-blue-800",
            },
            {
              title: "Track Shipment",
              description: "Track a shipment by tracking number.",
              link: "/trackshipment",
              color: "bg-green-100 text-green-800",
            },
            {
              title: "Manage Profile",
              description: "Update your account settings.",
              link: "/manageprofile",
              color: "bg-yellow-100 text-yellow-800",
            },
          ].map((action, idx) => (
            <a
              key={idx}
              href={action.link}
              className={`rounded-lg shadow-sm p-6 hover:shadow-md transition border ${action.color}`}
            >
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-sm">{action.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Recent Shipments Table (Optional - Static) */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Recent Shipments
        </h2>
        <div className="overflow-auto rounded-lg shadow-sm">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-100 text-blue-800 text-sm">
              <tr>
                <th className="px-4 py-3 text-left">Tracking #</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Origin</th>
                <th className="px-4 py-3 text-left">Destination</th>
                <th className="px-4 py-3 text-left">ETA</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {[
                {
                  tracking: "SKY123456",
                  status: "In Transit",
                  origin: "New York, USA",
                  destination: "Lagos, Nigeria",
                  eta: "July 29, 2025",
                },
                {
                  tracking: "SKY654321",
                  status: "Delivered",
                  origin: "Dubai, UAE",
                  destination: "Johannesburg, SA",
                  eta: "July 20, 2025",
                },
              ].map((shipment, idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-3">{shipment.tracking}</td>
                  <td className="px-4 py-3">{shipment.status}</td>
                  <td className="px-4 py-3">{shipment.origin}</td>
                  <td className="px-4 py-3">{shipment.destination}</td>
                  <td className="px-4 py-3">{shipment.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;

// import React, { useState } from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h2>Welcome to your Dashboard</h2>
//       <p>Manage shipments, track parcels, and more.</p>
//     </div>
//   );
// };

// export default Dashboard;
