"use client";

import React, { useContext, useEffect } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { CarContext } from "../context/CarContext";
import axios from "../utils/axios";

const ChargesSummary = () => {
  const {
    reservationId,
    pickupDate,
    returnDate,
    collisionDamageWaiver,
    liabilityInsurance,
    rentalTax,
    duration,
    discount,
    setWeeks,
    setDays,
    setTotal,
    setTotalDailyCost,
    setTotalWeeklyCost,
    setCollisionDamageWaiverCost,
    setLiabilityInsuranceCost,
    setRentalTaxCost,
    setDiscountAmount,
    setDailyRate,
    setWeeklyRate,
    setSelectedCar,
    // customer details
    firstName,
    lastName,
    email,
    phone,
  } = useContext(InvoiceContext);

  const { selectedVehicle, cars } = useContext(CarContext);

  // Function to parse the duration string into weeks and days
  const parseDuration = (duration) => {
    if (!duration || typeof duration !== "string") {
      return { weeks: 0, days: 0 };
    }

    const weeksMatch = duration.match(/(\d+)\s*weeks?/);
    const daysMatch = duration.match(/(\d+)\s*days?/);

    const weeks = weeksMatch ? parseInt(weeksMatch[1]) : 0;
    const days = daysMatch ? parseInt(daysMatch[1]) : 0;

    return { weeks, days };
  };

  const { weeks, days } = parseDuration(duration);

  // Get the rates for the selected vehicle
  const selectedCar = cars.find((car) => car.id === selectedVehicle);
  const dailyRate = selectedCar ? selectedCar.rates.daily : 0;
  const weeklyRate = selectedCar ? selectedCar.rates.weekly : 0;

  // Calculate the total costs based on duration
  const totalDailyCost = days * dailyRate;
  const totalWeeklyCost = weeks * weeklyRate;
  const subTotal = totalDailyCost + totalWeeklyCost;

  // Calculate additional charges
  const collisionDamageWaiverCost = collisionDamageWaiver ? 9 : 0;
  const liabilityInsuranceCost = liabilityInsurance ? 15 : 0;
  const rentalTaxCost = rentalTax ? subTotal * 0.115 : 0;

  // Apply discount
  const discountAmount = (subTotal * discount) / 100;
  const total =
    subTotal +
    collisionDamageWaiverCost +
    liabilityInsuranceCost +
    rentalTaxCost -
    discountAmount;

  // Validation function to check if all required fields are present
  const isDataValid = () => {
    return reservationId && firstName && lastName && selectedCar && total > 0;
  };

  useEffect(() => {
    setWeeks(weeks);
    setDays(days);
    setTotal(total);
    setTotalDailyCost(totalDailyCost);
    setTotalWeeklyCost(totalWeeklyCost);
    setCollisionDamageWaiverCost(collisionDamageWaiverCost);
    setLiabilityInsuranceCost(liabilityInsuranceCost);
    setRentalTaxCost(rentalTaxCost);
    setDiscountAmount(discountAmount);
    setDailyRate(dailyRate);
    setWeeklyRate(weeklyRate);
    setSelectedCar(selectedCar);

    if (isDataValid()) {
      const checkReservationId = async () => {
        try {
          const response = await axios.get(`/invoice/${reservationId}`);
          if (!response.data.exists) {
            const invoiceData = {
              reservationId,
              pickupDate,
              returnDate,
              total,
              discountAmount,
              collisionDamageWaiver,
              collisionDamageWaiverCost,
              dailyRate,
              days,
              discount,
              duration,
              email,
              firstName,
              lastName,
              liabilityInsurance,
              liabilityInsuranceCost,
              phone,
              rentalTax,
              rentalTaxCost,
              // selectedCar: {
              //   id: selectedCar.id,
              //   make: selectedCar.make,
              //   model: selectedCar.model,
              //   year: selectedCar.year,
              //   type: selectedCar.type,
              //   seats: selectedCar.seats,
              //   bags: selectedCar.bags,
              //   imageURL: selectedCar.imageURL,
              //   features: selectedCar.features,
              //   rates: selectedCar.rates,
              // },
              totalDailyCost,
              totalWeeklyCost,
              weeklyRate,
              weeks,
            };

            await axios.post("/invoice", invoiceData);
            console.log("Invoice saved....");
          } else {
            console.error("Duplicate reservationId, invoice not saved");
          }
        } catch (error) {
          console.error("Error checking or saving invoice:", error);
        }
      };

      checkReservationId();
    } else {
      console.error("Incomplete data, invoice not saved");
    }
  }, [
    weeks,
    days,
    total,
    totalDailyCost,
    totalWeeklyCost,
    collisionDamageWaiverCost,
    liabilityInsuranceCost,
    rentalTaxCost,
    discountAmount,
    dailyRate,
    weeklyRate,
    selectedCar,
  ]);

  return (
    <div className="max-w-md mx-auto p-4 shadow-md rounded-lg bg-indigo-200">
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
          {weeks > 0 && (
            <tr>
              <td className="border px-4 py-2">Weekly</td>
              <td className="border px-4 py-2">{weeks}</td>
              <td className="border px-4 py-2">${weeklyRate}</td>
              <td className="border px-4 py-2">
                ${totalWeeklyCost.toFixed(2)}
              </td>
            </tr>
          )}
          {days > 0 && (
            <tr>
              <td className="border px-4 py-2">Daily</td>
              <td className="border px-4 py-2">{days}</td>
              <td className="border px-4 py-2">${dailyRate}</td>
              <td className="border px-4 py-2">${totalDailyCost.toFixed(2)}</td>
            </tr>
          )}
          {discount > 0 && (
            <tr>
              <td className="border px-4 py-2">Discount</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">{discount}%</td>
              <td className="border px-4 py-2">
                -${discountAmount.toFixed(2)}
              </td>
            </tr>
          )}
          {collisionDamageWaiver && (
            <tr>
              <td className="border px-4 py-2">Collision Damage Waiver</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">$9</td>
              <td className="border px-4 py-2">$9</td>
            </tr>
          )}
          {liabilityInsurance && (
            <tr>
              <td className="border px-4 py-2">Liability Insurance</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">$15</td>
              <td className="border px-4 py-2">$15</td>
            </tr>
          )}
          {rentalTax && (
            <tr>
              <td className="border px-4 py-2">Rental Tax</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">11.5%</td>
              <td className="border px-4 py-2">${rentalTaxCost.toFixed(2)}</td>
            </tr>
          )}
          <tr>
            <td className="border px-4 py-2" colSpan="3">
              <strong>Total</strong>
            </td>
            <td className="border px-4 py-2">
              <strong>${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargesSummary;
