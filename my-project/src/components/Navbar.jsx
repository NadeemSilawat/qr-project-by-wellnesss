import React from 'react';

function Navbar() {
  return (
    <div className=" w-full z-50 flex items-center justify-between bg-gradient-to-r from-green-200 via-green-700 to-green-600 shadow-lg px-6 py-2">
      {/* Wellness logo */}
      <div className="flex items-center gap-2 m-3">
        <img
          src="/20250615_191433_0000.png"
          alt="Wellness Club Logo"
          className="h-14 w-auto object-contain drop-shadow-lg"
        />
        <span className="text-2xl font-bold text-white tracking-wide drop-shadow">
          Wellness Club
        </span>
      </div>
      {/* JIET logo */}
      <div className="flex items-center">
        <img
          src="/JIET+Universe+Logo.png"
          alt="JIET Logo"
          className="h-10 w-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export default Navbar;
