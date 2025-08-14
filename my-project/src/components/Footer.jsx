import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-green-200 via-green-600 to-green-700 text-center flex flex-col items-center gap-2 shadow-inner">
      <div className="flex flex-row items-center">
        <img
          src="/20250615_191433_0000.png"
          alt="Club Logo"
          className="h-16 w-16 object-contain mr-3 drop-shadow-lg"
        />
        <p className="text-white text-lg font-bold font-serif drop-shadow">
          Founder: Anshul Gaurana
        </p>
      </div>
      {/* <p className="text-green-200 text-sm font-mono  drop-shadow">
        Developed by Nadeem Silawat
      </p> */}
    </footer>
  );  
}
