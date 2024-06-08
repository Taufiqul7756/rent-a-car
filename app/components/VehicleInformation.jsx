"use client";

import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import Dropdown from "./Dropdown";
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

  const uniqueVehicleTypes = [...new Set(cars.map((car) => car.type))];

  const selectedCar = models.find((car) => car.id === selectedVehicle);

  const renderVehicleTypeOption = (option) => option;
  const renderVehicleOption = (option) => (
    <div className="flex items-center">
      <img
        src={option.imageURL}
        alt={`${option.make} ${option.model}`}
        className="w-8 h-8 mr-2 rounded-full"
      />
      <span>{`${option.make} ${option.model}`}</span>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle Type:
        </label>
        <Dropdown
          value={selectedType}
          options={uniqueVehicleTypes}
          onChange={(option) => setSelectedType(option)}
          renderOption={renderVehicleTypeOption}
          placeholder="Select a vehicle type"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vehicle:
        </label>
        <Dropdown
          value={selectedCar}
          options={models}
          onChange={(option) => setSelectedVehicle(option.id)}
          renderOption={renderVehicleOption}
          placeholder="Select a vehicle"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {selectedCar && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <img
            src={selectedCar.imageURL}
            alt={`${selectedCar.make} ${selectedCar.model}`}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            {selectedCar.make} {selectedCar.model} ({selectedCar.year})
          </h2>
          <p className="mb-2">Seats: {selectedCar.seats}</p>
          <p className="mb-2">Bags: {selectedCar.bags}</p>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Rates:</h3>
              <p className="mb-2">Hourly: ${selectedCar.rates.hourly}</p>
              <p className="mb-2">Daily: ${selectedCar.rates.daily}</p>
              <p className="mb-2">Weekly: ${selectedCar.rates.weekly}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside">
                {selectedCar.features.map((feature, index) => (
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
