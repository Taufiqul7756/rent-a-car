"use client";

import React, { useContext, useState, useEffect } from "react";
import { InvoiceContext } from "../context/InvoiceContext";
import { CarContext } from "../context/CarContext";
import moment from "moment";
import invoiceImg from "../images/invoice-img.png";
import Image from "next/image";

const Invoice = React.forwardRef((props, ref) => {
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

  // State to store client-side reservationId
  const [clientReservationId, setClientReservationId] = useState(null);

  useEffect(() => {
    // Set the clientReservationId to match server-rendered reservationId
    setClientReservationId(reservationId);
  }, [reservationId]);

  return (
    <div className="border p-6" ref={ref}>
      <div className="text-sm">
        <div className="grid grid-cols-2 gap-2">
          {/* right div */}
          <div>
            <div className="grid grid-cols-2">
              <div className="w-full flex flex-col justify-start gap-2">
                <Image src={invoiceImg} width={200} height={200} />
                <div className="w-full ">
                  <h1 className="font-bold text-lg">RENTER INFO</h1>
                  <p className="font-bold capitalize ">
                    {firstName + " " + lastName}
                  </p>
                  <p>{email}</p>
                  <p>PH: {phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-bold">
                  <p>CH Car Place Inc</p>
                  <p>162 Bergen st</p>
                  <p>Brooklyn, NY 112113</p>
                  <p>PH#</p>
                </div>
                <div className="">
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
              <h1 className="text-base font-bold mb-2">UNIT DETAILS</h1>
              <p>
                <span className="font-bold">Unit :</span>{" "}
                {selectedCar?.type || "N/A"}
              </p>
              <p>
                <span className="font-bold">Make & Model :</span>{" "}
                {selectedCar?.make || "N/A"} & {selectedCar?.model || "N/A"}{" "}
              </p>

              <div className="py-5">
                <p>BILL TO :</p>
                <p>Payment Type : Unpaid</p>
                <p>AUTH : $0.00</p>
              </div>

              <div>
                <p>Referral:</p>
                <p>
                  <span className="font-bold">NOTICE:</span> Collision Insurance
                  (CDW) - $7 per day
                </p>
                <p>
                  Limits liability of damages to one's own vehicle up to $1000
                  in event of an accident, by waiving this coverage renter
                  agrees to be hold liable for damages up to the entire value of
                  the vehicle
                </p>
              </div>
              <div className="flex justify-around items-center my-5 ">
                <p className="bg-gray-400 py-2 p-4 rounded cursor-pointer hover:bg-slate-400">
                  Accept
                </p>
                <p className="bg-gray-400 py-2 p-4 rounded cursor-pointer hover:bg-slate-400">
                  Reject
                </p>
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
            <div className="mb-5">
              <h1 className="text-3xl font-bold">Reservation</h1>
              <h1 className="text-lg font-bold my-3">{clientReservationId}</h1>
              <p>REPAIR ORDER:</p>
              <p>CLAIM:</p>
              <p>
                Date/Time Out:{" "}
                <span className="font-bold">
                  {moment(new Date(pickupDate)).format("MM/DD/YYYY, h:mm a")}
                </span>
              </p>
              <p>
                Date/Time In:{" "}
                <span className="font-bold">
                  {moment(new Date(returnDate)).format("MM/DD/YYYY, h:mm a")}
                </span>
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
                purchase the waiver, you may wish to determine whether your own
                automobile insurance or credit card agreement provides coverage
                for rental vehicle damage or loss and determine the amount of
                the deductible under your own insurance coverage. The purchase
                of the waiver is not mandatory. The waiver is not insurance. I
                acknowledge that I have received and read a copy of this
              </p>
            </div>
            <p className="pt-5">Renter's Signature</p>
            -------------------------------------------------------------------
            <p className="mt-10">Additional Driver 1</p>
            -------------------------------------------------------------------
          </div>
        </div>
      </div>
    </div>
  );
});

export default Invoice;
