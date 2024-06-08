"use client";

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const InvoiceContext = createContext();

const InvoiceProvider = ({ children }) => {
  // Reservation Details
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
  // Calculated Data
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalDailyCost, setTotalDailyCost] = useState(0);
  const [totalWeeklyCost, setTotalWeeklyCost] = useState(0);
  const [collisionDamageWaiverCost, setCollisionDamageWaiverCost] = useState(0);
  const [liabilityInsuranceCost, setLiabilityInsuranceCost] = useState(0);
  const [rentalTaxCost, setRentalTaxCost] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [dailyRate, setDailyRate] = useState(0);
  const [weeklyRate, setWeeklyRate] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);

  // Generating reservationId Automatically
  useEffect(() => {
    setReservationId("RA#" + uuidv4());
  }, []);
  // Getting reservation Form Data
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
        // reservation details
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
        // additional charges
        collisionDamageWaiver,
        setCollisionDamageWaiver,
        liabilityInsurance,
        setLiabilityInsurance,
        rentalTax,
        setRentalTax,
        // calculated data
        weeks,
        setWeeks,
        days,
        setDays,
        total,
        setTotal,
        totalDailyCost,
        setTotalDailyCost,
        totalWeeklyCost,
        setTotalWeeklyCost,
        collisionDamageWaiverCost,
        setCollisionDamageWaiverCost,
        liabilityInsuranceCost,
        setLiabilityInsuranceCost,
        rentalTaxCost,
        setRentalTaxCost,
        discountAmount,
        setDiscountAmount,
        dailyRate,
        setDailyRate,
        weeklyRate,
        setWeeklyRate,
        selectedCar,
        setSelectedCar,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceProvider, InvoiceContext };
