import React from "react";

const deliveries = [
  {
    id: 1054,
    driver: "John D.",
    vehicle: "TR-3021",
    pickup: "Chicago, IL",
    delivery: "Detroit, MI",
    pickupTime: "09:00 AM",
    eta: "1:30 PM",
    status: "En Route",
    phone: "(555) 123-4567",
    checkin: "10:15 AM",
  },
  {
    id: 1055,
    driver: "Maria S.",
    vehicle: "TR-1123",
    pickup: "Milwaukee, WI",
    delivery: "Indianapolis, IN",
    pickupTime: "10:00 AM",
    eta: "3:00 PM",
    status: "Scheduled",
    phone: "(555) 987-6543",
    checkin: "8:45 AM",
  },
  {
    id: 1056,
    driver: "Tony R.",
    vehicle: "TR-8890",
    pickup: "St. Louis, MO",
    delivery: "Kansas City, MO",
    pickupTime: "11:30 AM",
    eta: "4:00 PM",
    status: "At Pickup",
    phone: "(555) 444-1122",
    checkin: "11:20 AM",
  },
];

const statusColor = {
  "En Route": "bg-green-100 text-green-800",
  Scheduled: "bg-yellow-100 text-yellow-800",
  "At Pickup": "bg-blue-100 text-blue-800",
};

const DispatchPage = () => {
  return (
    <div className="p-6 bg-blue-500 -h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Sky Logistics - Dispatch Dashboard
      </h1>

      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Scheduled Deliveries</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2">Load #</th>
                <th className="px-4 py-2">Driver</th>
                <th className="px-4 py-2">Vehicle</th>
                <th className="px-4 py-2">Pickup</th>
                <th className="px-4 py-2">Delivery</th>
                <th className="px-4 py-2">Pickup Time</th>
                <th className="px-4 py-2">ETA</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.driver}</td>
                  <td className="px-4 py-2">{item.vehicle}</td>
                  <td className="px-4 py-2">{item.pickup}</td>
                  <td className="px-4 py-2">{item.delivery}</td>
                  <td className="px-4 py-2">{item.pickupTime}</td>
                  <td className="px-4 py-2">{item.eta}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        statusColor[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Driver Contacts</h2>
          {deliveries.map((d) => (
            <div key={d.driver} className="mb-3">
              <p className="font-medium">
                {d.driver} ({d.vehicle})
              </p>
              <p className="text-sm text-gray-600">📞 {d.phone}</p>
              <p className="text-sm text-gray-500">
                Last Check-in: {d.checkin}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-semibold mb-4">Alerts & Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>TR-1123</strong>: Engine warning light reported. Monitor
              closely.
            </li>
            <li>
              <strong>TR-8890</strong>: Heavy traffic on I-70 West.
            </li>
            <li>
              <strong>Weather</strong>: Thunderstorms expected in Chicago by
              3:00 PM.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DispatchPage;
