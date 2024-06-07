"use client";

import React, { createContext, useState, useEffect } from "react";
import { fetchCars } from "../utils/service";

const CarContext = createContext();

// Create the provider component
const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <CarContext.Provider value={{ cars, loading, error }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarProvider, CarContext };
