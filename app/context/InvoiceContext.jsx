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

  // Customer Details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Additional Charges
  const [collisionDamageWaiver, setCollisionDamageWaiver] = useState(false);
  const [liabilityInsurance, setLiabilityInsurance] = useState(false);
  const [rentalTax, setRentalTax] = useState(false);

  // Log data for debugging
  useEffect(() => {
    console.log("reservationId from invoice context", reservationId);
    console.log("reservation Data from invoice context", {
      returnDate,
      pickupDate,
      duration,
      discount,
      firstName,
      lastName,
      email,
      phone,
      collisionDamageWaiver,
      liabilityInsurance,
      rentalTax,
    });
  }, [
    reservationId,
    pickupDate,
    returnDate,
    duration,
    discount,
    firstName,
    lastName,
    email,
    phone,
    collisionDamageWaiver,
    liabilityInsurance,
    rentalTax,
  ]);

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
      firstName,
      lastName,
      email,
      phone,
      collisionDamageWaiver,
      liabilityInsurance,
      rentalTax,
    };

    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  return (
    <InvoiceContext.Provider
      value={{
        //reservation details
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

        // customer details
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,

        //additional Charges
        collisionDamageWaiver,
        setCollisionDamageWaiver,
        liabilityInsurance,
        setLiabilityInsurance,
        rentalTax,
        setRentalTax,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceProvider, InvoiceContext };
