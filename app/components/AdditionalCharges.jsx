"use client";

import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

const AdditionalCharges = () => {
  const {
    collisionDamageWaiver,
    setCollisionDamageWaiver,
    liabilityInsurance,
    setLiabilityInsurance,
    rentalTax,
    setRentalTax,
  } = useContext(InvoiceContext);

  const handleCheckboxChange = (setter) => (event) => {
    setter(event.target.checked);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Additional Charges:
        </label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={collisionDamageWaiver}
            onChange={handleCheckboxChange(setCollisionDamageWaiver)}
            className="mr-2"
          />
          <span>Collision Damage Waiver ($9)</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={liabilityInsurance}
            onChange={handleCheckboxChange(setLiabilityInsurance)}
            className="mr-2"
          />
          <span>Liability Insurance ($15)</span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rentalTax}
            onChange={handleCheckboxChange(setRentalTax)}
            className="mr-2"
          />
          <span>Rental Tax (11.5%)</span>
        </div>
      </div>
    </div>
  );
};

export default AdditionalCharges;
