"use client";

import React, { createContext, useState, useEffect } from "react";
import { fetchCars } from "../utils/service";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const result = await fetchCars();
        console.log("Car data", result);

        if (result.status === "success") {
          setCars(result.data);
        } else {
          setError("Failed to fetch car data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  useEffect(() => {
    if (selectedType) {
      const filteredModels = cars.filter((car) => car.type === selectedType);
      setModels(filteredModels);
    } else {
      setModels([]);
    }
  }, [selectedType, cars]);

  useEffect(() => {
    if (selectedType && selectedVehicle) {
      console.log("Selected Data:", {
        type: selectedType,
        vehicle: selectedVehicle,
      });
    }
  }, [selectedType, selectedVehicle]);

  return (
    <CarContext.Provider
      value={{
        cars,
        loading,
        error,
        selectedType,
        setSelectedType,
        selectedVehicle,
        setSelectedVehicle,
        models,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarProvider, CarContext };
