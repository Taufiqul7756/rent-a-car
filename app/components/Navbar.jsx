import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white  py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reservation</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Print/Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
