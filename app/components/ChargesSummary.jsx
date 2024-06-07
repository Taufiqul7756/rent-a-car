"use client";

import React from "react";

const ChargesSummary = () => {
  // Hardcoded data
  const chargesData = [
    { charge: "Daily", unit: 1, rate: 70 },
    { charge: "Weekly", unit: 1, rate: 400 },
    { charge: "Collision Damage Waiver", unit: 1, rate: 9 },
    { charge: "Liability Insurance", unit: 1, rate: 15 },
    { charge: "Rental Tax", unit: 1, rate: 11.5 },
  ];

  // Function to calculate the total
  const calculateTotal = (unit, rate) => unit * rate;

  return (
    <div className="max-w-md mx-auto p-4  shadow-md rounded-lg bg-indigo-200">
      <h2 className="text-lg font-bold mb-4">Charges Summary</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Charges</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Rate</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {chargesData.map((charge, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{charge.charge}</td>
              <td className="border px-4 py-2">{charge.unit}</td>
              <td className="border px-4 py-2">${charge.rate}</td>
              <td className="border px-4 py-2">
                ${calculateTotal(charge.unit, charge.rate).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
