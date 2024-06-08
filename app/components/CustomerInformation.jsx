"use client";

import React, { useContext, useState } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

const CustomerInformation = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
  } = useContext(InvoiceContext);

  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
            emailError ? "border-red-500" : "focus:border-indigo-500"
          }`}
        />
        {emailError && (
          <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
      </div>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2">Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default CustomerInformation;
