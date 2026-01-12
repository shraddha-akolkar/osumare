import React from "react";
import phoneImg from "../assets/images/phone.png"; 
// ⬆️ use the image you showed (rename accordingly)

const Organizing = () => {
  return (
    <section className="bg-white px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src={phoneImg}
              alt="Organizing App"
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0E1F51] mb-4">
              Start Organizing Your <br /> Life Today
            </h2>

            <p className="text-gray-600 text-sm mb-6 max-w-md">
              Join us now and transform your productivity with our intuitive
              to-do list platform!
            </p>

            <div className="flex gap-4">
              <button className="bg-[#FF3E54] text-white px-6 py-3 rounded text-sm font-medium">
                Sign Up
              </button>

              <button className="border border-[#FF3E54] text-[#FF3E54] px-6 py-3 rounded text-sm">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Organizing;
