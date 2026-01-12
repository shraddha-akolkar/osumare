import React from "react";
import userImg from "../assets/images/testimonial.png";

const Testimonials = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

  {/* LEFT COLUMN */}
  <div>

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-bold text-[#0E1F51] mb-5">
      Customer Testimonials
    </h2>
    <p className="text-sm text-gray-600 mb-10">
      This tool has transformed my productivity and organization!
    </p>

    {/* Quote Box */}
    <div className="relative pl-10 pt-10 pb-12">

      {/* L-shape border */}
      <div className="absolute top-0 left-0 w-full h-full 
        border-l-[16px] border-t-[16px] border-b-[16px] border-[#FF3E54]">
      </div>

      <p className="text-xl font-semibold text-[#0E1F51] leading-relaxed mb-10 relative">
        Using this website has made my tasks so much easier!
        I can't imagine my day without it.
      </p>

      {/* Author */}
      <div className="flex items-start gap-4 relative">
        <div className="w-4 h-4 bg-[#FF3E54] mt-1"></div>
        <div>
          <p className="text-sm font-semibold text-[#0E1F51]">
            Sherri Cronin
          </p>
          <p className="text-xs text-gray-500">
            Project Manager, TechCorp
          </p>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex gap-4 mt-10 relative">
        <button className="w-10 h-10 border border-[#FF3E54] text-[#FF3E54] rounded-full">
          ‹
        </button>
        <button className="w-10 h-10 bg-[#FF3E54] text-white rounded-full">
          ›
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="relative w-[540px] h-[540px]">

    <div className="absolute top-0 right-0 w-full h-full
      border-r-[16px] border-t-[16px] border-b-[16px]
      border-[#FF3E54]">
    </div>

    <img
      src={userImg}
      alt="Customer"
      loading="lazy"
      className="absolute top-7 left-0 h-[480px] w-[500px] object-cover"
    />
  </div>

</div>

    </section>
  );
};

export default Testimonials;
