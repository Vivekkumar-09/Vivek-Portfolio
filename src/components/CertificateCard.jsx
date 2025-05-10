import React from "react";

function CertificateCard() {
    
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden m-4 transition transform hover:scale-105">
    <img
      src="/docs/certificate1.png"
      alt="Certificate"
      className="w-full h-48 object-cover"
    />
    <div className="p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        UI/UX Review Check
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        Because it's about motivating the doers. Because I'm here to follow my
        dreams and inspire others.
      </p>
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="inline-flex items-center text-lg text-blue-600 hover:underline font-medium"
        >
          View PDF
          <img
            src="/icons/right-arrow.png"
            alt="arrow"
            className="w-4 h-4 ml-1"
          />
        </a>
        <span className="text-sm text-gray-500">January 10</span>
      </div>
    </div>
  </div>
  );
}

export default CertificateCard;
