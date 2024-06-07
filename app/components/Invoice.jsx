"use client";

import React, { useContext } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { CarContext } from "../context/CarContext";
import moment from "moment";

const Invoice = () => {
  const {
    // Reservation details
    reservationId,
    pickupDate,
    returnDate,
    duration,
    discount,
    addReservation,
    reservations,

    // Customer details
    firstName,
    lastName,
    email,
    phone,

    // Additional Charges
    collisionDamageWaiver,
    liabilityInsurance,
    rentalTax,
    setRentalTax,

    // Calculated Charges
    weeks,
    setWeeks,
    days,
    setDays,
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
  } = useContext(InvoiceContext);
  const { cars, loading, error, selectedType, selectedVehicle, models } =
    useContext(CarContext);

  console.log("invoice ", {
    reservationId,
    pickupDate,
    returnDate,
    duration,
    discount,
    // reservations,

    // Customer details
    firstName,
    lastName,
    email,
    phone,

    // Additional Charges
    collisionDamageWaiver,
    liabilityInsurance,
    rentalTax,

    // Calculated Charges
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
  });
  return (
    <div>
      <div className="p-10 text-sm">
        <div className="grid grid-cols-2 gap-2">
          {/* right div` */}
          <div>
            <div className="grid grid-cols-2">
              {/* logo with user & company info  */}
              <div className="w-full flex flex-col justify-center items-center gap-4">
                {/* <div>
                  <img src={logo} alt="" className="w-32" />
                </div> */}
                <div className="w-full">
                  <h1>RENTER INFO</h1>
                  <p className="font-bold capitalize ">
                    {firstName + " " + lastName}
                  </p>
                  <p>{email}</p>
                  <p>PH: {phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p>CH Car Place Inc</p>
                  <p>162 Bergen st</p>
                  <p>Brooklyn, NY 112113</p>
                  <p>PH#</p>
                </div>
                <div>
                  Monday 9:00 AM - 6:00 PM <br />
                  Tuesday 9:00 AM - 6:00 PM <br />
                  Wednesday 9:00 AM - 6:00 PM <br />
                  Thursday 9:00 AM - 6:00 PM <br />
                  Friday 9:00 AM - 6:00 PM <br />
                  Saturday 9:00 AM - 6:00 PM <br />
                  Sunday 9:00 AM - 6:00 PM <br />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-lg font-bold my-3">
                ADDITIONAL AUTHORIZED DRIVER(S)
              </h1>
              <h1 className="text-base font-bold">UNIT DETAILS</h1>
              <p>Unit : </p>
              <p>Make & Model : </p>

              <div className="py-5">
                <p>BILL TO :</p>
                <p>Payment Type : Unpaid</p>
                <p>AUTH : $0.00</p>
              </div>

              <div>
                <p>Referral:</p>
                <p>NOTICE: Collision Insurance (CDW) - $7 per day</p>
                <p>
                  Limits liability of damages to one's own vehicle up to $1000
                  in event of an accident, by waiving this coverage renter
                  agrees to be hold liable for damages up to the entire value of
                  the vehicle
                </p>
              </div>
              <div className="grid grid-cols-2 my-5 text-center">
                <p>Accept</p>
                <p>Reject</p>
              </div>
              <p>
                Rental service may be refused anyone when done in the best
                interest of the renting company or customer - Rates do not
                include gasoline. -Reserves the right to collect deposit
                covering estimated rental charges.
              </p>
            </div>
          </div>
          {/* left  */}
          <div>
            <div>
              <h1 className="text-2xl font-bold">Reservation</h1>
              <h1 className="text-lg font-bold">{reservationId}</h1>
              <p>REPAIR ORDER:</p>
              <p>CLAIM:</p>
              <p>
                Date/Time Out:{" "}
                {moment(new Date(pickupDate)).format("MM/DD/YYYY, h:mm a")}
              </p>
              <p>
                Date/Time In:{" "}
                {moment(new Date(returnDate)).format("MM/DD/YYYY, h:mm a")}
              </p>
            </div>
            {/* summary */}
            <div className=" ">
              <div className="text-sm space-y-1 bg-slate-200 p-5">
                <h1 className="text-lg font-bold">CHARGE SUMMARY</h1>
                <div className="grid grid-cols-12 gap-1 font-semibold">
                  <div className="col-span-6">Charge</div>
                  <div className="col-span-2 text-center">Unit</div>
                  <div className="col-span-2 text-center">Rate</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>

                <div className="grid grid-cols-12 gap-1 items-center">
                  <div className="col-span-6">Daily</div>
                  <div className="col-span-2 text-center">{days}</div>
                  <div className="col-span-2 text-center">{dailyRate}</div>
                  <div className="col-span-2 text-center">
                    ${totalDailyCost.toFixed(2)}
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-1 items-center">
                  <div className="col-span-6">Weekly</div>
                  <div className="col-span-2 text-center">{weeks}</div>
                  <div className="col-span-2 text-center">{weeklyRate}</div>
                  <div className="col-span-2 text-center">
                    ${totalWeeklyCost.toFixed(2)}
                  </div>
                </div>

                {collisionDamageWaiver && (
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-6">Collision Damage Waiver</div>
                    <div className="col-span-2 text-center">1</div>
                    <div className="col-span-2 text-center">$9.00</div>
                    <div className="col-span-2 text-center">$9.00</div>
                  </div>
                )}

                {liabilityInsurance && (
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-6">Liability Insurance</div>
                    <div className="col-span-2 text-center">1</div>
                    <div className="col-span-2 text-center">$15.00</div>
                    <div className="col-span-2 text-center">$15.00</div>
                  </div>
                )}

                {rentalTax && (
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-6">Rental Tax</div>
                    <div className="col-span-2 text-center">1</div>
                    <div className="col-span-2 text-center">11.2%</div>
                    <div className="col-span-2 text-center">
                      ${rentalTaxCost.toFixed(2)}
                    </div>
                  </div>
                )}

                {discount > 0 && (
                  <div className="grid grid-cols-12 gap-1 items-center">
                    <div className="col-span-6">Discount</div>
                    <div className="col-span-2 text-center"></div>
                    <div className="col-span-2 text-center"></div>
                    <div className="col-span-2 text-center">
                      -${discountAmount.toFixed(2)}
                    </div>
                  </div>
                )}

                <hr />

                <div className="grid grid-cols-12 gap-1 items-center uppercase font-bold">
                  <div className="col-span-10">Total Estimated Charges</div>
                  <div className="col-span-2 text-center">
                    ${total.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5">
              <p>
                Your rental agreement offers, for an additional charge, an
                optional waiver to cover all or a part of your responsibility
                for damage to or loss of the vehicle: Before deciding whether to
                purchase the walver, you may wish to determine whether you own
                automobile incsurance or credit card agreement provides to
                coverage for rental vehicle damage or loss and determine the
                amount of the deductible under your own insurance coverage. The
                purchase of the waiver is ot mandator. The waiver is not
                Insurance. I acknowledge that I have received and read a copy of
                this
              </p>
            </div>
            <p>Renters Signature</p>
            -------------------------------------------
            <p className="mt-10">Additional Driver 1</p>
            -------------------------------------------
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
