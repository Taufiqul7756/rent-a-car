"use client";

import React, { useContext, useEffect } from "react";
import { CarContext } from "../context/CarContext";
import Dropdown from "./Dropdown";
import { InvoiceContext } from "../context/InvoiceContext";

const VehicleInformation = () => {
  const {
    loading,
    error,
    selectedType,
    setSelectedType,
    selectedVehicle,
    setSelectedVehicle,
    cars,
    models,
  } = useContext(CarContext);

  const { setSelectedCar } = useContext(InvoiceContext);

  const uniqueVehicleTypes = [...new Set(cars.map((car) => car.type))];

  // Filter models based on the selected type
  const filteredModels = models.filter((car) => car.type === selectedType);

  // Reset selectedVehicle when selectedType changes
  useEffect(() => {
    setSelectedVehicle(null);
  }, [selectedType, setSelectedVehicle]);

  const handleVehicleChange = (car) => {
    setSelectedVehicle(car);
    setSelectedCar(car);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle Type:
        </label>
        <Dropdown
          value={selectedType}
          options={uniqueVehicleTypes}
          onChange={(value) => setSelectedType(value)}
          renderOption={(option) => <span>{option}</span>}
          placeholder="Select a vehicle type"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle:
        </label>
        <Dropdown
          value={selectedVehicle}
          options={filteredModels}
          onChange={handleVehicleChange}
          placeholder="Select a vehicle"
          renderOption={(car) => (
            <div className="flex items-center">
              <img
                src={car.imageURL}
                alt={`${car.make} ${car.model}`}
                className="w-8 h-8 object-cover mr-2"
              />
              <span>
                {car.make} {car.model}
              </span>
            </div>
          )}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {selectedVehicle && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <img
            src={selectedVehicle.imageURL}
            alt={`${selectedVehicle.make} ${selectedVehicle.model}`}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            {selectedVehicle.make} {selectedVehicle.model} (
            {selectedVehicle.year})
          </h2>
          <p className="mb-2">Seats: {selectedVehicle.seats}</p>
          <p className="mb-2">Bags: {selectedVehicle.bags}</p>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Rates:</h3>
              <p className="mb-2">Hourly: ${selectedVehicle.rates.hourly}</p>
              <p className="mb-2">Daily: ${selectedVehicle.rates.daily}</p>
              <p className="mb-2">Weekly: ${selectedVehicle.rates.weekly}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                {selectedVehicle.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleInformation;
