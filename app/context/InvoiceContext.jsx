"use client";

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Create the context
const InvoiceContext = createContext();

// Create the provider component
const InvoiceProvider = ({ children }) => {
  //Reservation Details
  const [reservationId, setReservationId] = useState(uuidv4());
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [duration, setDuration] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [reservations, setReservations] = useState([]);

  // console.log("duration from context", duration);
  console.log("reservationId from invoice context", reservationId);
  console.log("reservation Data from invoice context", {
    returnDate: returnDate,
    pickupDate: pickupDate,
    duration: duration,
    discount: discount,
  });

  //Generating reservationId Automatically
  useEffect(() => {
    setReservationId("RA# " + uuidv4());
  }, []);

  //getting reservation Form Data
  const addReservation = () => {
    const reservation = {
      reservationId,
      pickupDate,
      returnDate,
      duration,
      discount,
    };

    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  return (
    <InvoiceContext.Provider
      value={{
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
        reservations,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceProvider, InvoiceContext };
