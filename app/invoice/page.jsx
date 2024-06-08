"use client";
import React from "react";
import Invoice from "../components/Invoice";
import { AiFillPrinter } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";

const Page = () => {
  const componentRef = React.useRef(null);

  // Function to handle printing using react-to-print
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="grid justify-center items-center mt-10">
      <div className="lg:px-36 md:px-16 sm:px-2 py-10 border-spacing-2 border-indigo-500">
        <div
          className="flex justify-end items-center gap-2 cursor-pointer"
          onClick={handlePrint}
        >
          <span className="font-bold">Print</span> <AiFillPrinter />
        </div>
        <Invoice ref={componentRef} />
      </div>
    </div>
  );
};

export default Page;
