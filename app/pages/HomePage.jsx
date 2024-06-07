import React from "react";
import ReservationForm from "../components/ReservationForm";
import VehicleInformation from "../components/VehicleInformation";

const HomePage = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl font-bold text-center my-4">
          Reservation Details
        </h1>
        <ReservationForm />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center my-4">
          Vehicle Information
        </h1>
        <VehicleInformation />
      </div>
    </div>
  );
};

export default HomePage;
