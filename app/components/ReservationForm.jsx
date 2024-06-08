"use client";
import React, { useContext, useEffect } from "react";
import { InvoiceContext } from "../context/InvoiceContext";

const ReservationForm = () => {
  const {
    reservationId,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    duration,
    setDuration,
    discount,
    setDiscount,
    addReservation,
  } = useContext(InvoiceContext);

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate - startDate;

    if (timeDiff < 0) return "0 days";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    return `${weeks} weeks ${remainingDays} days`;
  };

  useEffect(() => {
    if (pickupDate && returnDate) {
      setDuration(calculateDuration(pickupDate, returnDate));
    }
  }, [pickupDate, returnDate]);

  useEffect(() => {
    if (reservationId && pickupDate && returnDate && duration && discount) {
      addReservation();
    }
  }, [reservationId, pickupDate, returnDate, duration, discount]);

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Reservation ID:
        </label>
        <input
          type="text"
          value={reservationId}
          readOnly
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pickup Date & Time:
        </label>
        <input
          type="datetime-local"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Return Date & Time:
        </label>
        <input
          type="datetime-local"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Duration:
        </label>
        <input
          type="text"
          value={duration}
          readOnly
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Discount (%):
        </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>
    </form>
  );
};

export default ReservationForm;
