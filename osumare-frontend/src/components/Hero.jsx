import React from "react";

function Hero({ openForm }) {
  return (
    <section className="bg-[#F9FAFB] px-10 py-10">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1646] leading-tight">
          Simplify Your Life with Our <br /> Todo App
        </h1>


        <p className="text-[#6F6C90] md:text-[19px] mt-6 leading-relaxed">
          Stay organized and boost your productivity with our intuitive todo website.
          Experience a modern approach to task management that fits your lifestyle.
        </p>



        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={openForm}
            className="bg-[#FF3E54] text-white px-10 py-4 rounded-full text-sm font-medium"
          >
            Get started
          </button>

          <button className="border border-[#FF3E54] text-[#FF3E54] px-10 py-4 rounded-full text-sm font-medium">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
