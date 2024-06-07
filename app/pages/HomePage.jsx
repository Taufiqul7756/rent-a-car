import React from "react";
import ReservationForm from "../components/ReservationForm";
import VehicleInformation from "../components/VehicleInformation";
import CustomerInformation from "../components/CustomerInformation";
import AdditionalCharges from "../components/AdditionalCharges";
import ChargesSummary from "../components/ChargesSummary";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* first column */}
        <div>
          <h1 className="text-xl font-bold border-b-2 border-indigo-200 pb-2 my-5">
            Reservation Details
          </h1>
          <ReservationForm />
          <h1 className="text-xl font-bold border-b-2 border-indigo-200 pb-2 my-5">
            Vehicle Information
          </h1>
          <VehicleInformation />
        </div>
        {/* second column */}
        <div>
          <h1 className="text-xl font-bold border-b-2 border-indigo-200 pb-2 my-5">
            Customer Information
          </h1>
          <CustomerInformation />
          <h1 className="text-xl font-bold border-b-2 border-indigo-200 pb-2 my-5">
            Additional Charges
          </h1>
          <AdditionalCharges />
        </div>
        {/* third column */}
        <div>
          <h1 className="text-xl font-bold border-b-2 border-indigo-200 pb-2 my-5">
            Charges Summary
          </h1>
          <ChargesSummary />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
