import React from "react";

const SuccessPopup = ({ close }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      <div
        onClick={close}
        className="absolute inset-0 bg-black/40"
      ></div>

<div className="relative bg-white rounded-xl p-8 w-[90%] max-w-sm text-center z-[10000]">
        <div className="text-red-500 text-3xl mb-2">❤️</div>

        <h3 className="text-lg font-semibold text-[#1B1646] mb-2">
          Thank you for connecting with us.
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Our team will contact with you soon.
        </p>

        <button
          onClick={close}
          className="w-full bg-[#FF3E54] text-white py-3 rounded text-sm font-medium"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
