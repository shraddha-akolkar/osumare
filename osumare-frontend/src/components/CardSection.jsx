import React from "react"; 
import person from "../assets/images/card.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import pintrest from "../assets/images/pintrest.png";
import twitch from "../assets/images/twitch.png";

const CardSection = () => {
  return (
    <section className="bg-[#F9FAFB] ">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 items-stretch">


        {/* card */}

          <div className="bg-[#FF3E54] text-white rounded-2xl p-12 h-[600px] flex flex-col justify-center">
            <h2 className="text-[98.87px] font-semibold leading-tight">
              Organize.<br />
              Achieve.<br />
              Relax.
            </h2>

<p className="text-[18px] mt-6 pr-10 ">
              Turn clutter into clarity, chaos into control, and dreams into done.
              Bold visions into market success.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-white text-[#FF3E54] px-6 py-3 rounded-full text-sm font-medium">
                Get Started Today
              </button>

              <button className="bg-[#ff5f70] text-white px-6 py-3 rounded-full text-sm">
                Discover Features
              </button>
            </div>
          </div>

          {/* img */}
          <div className="relative rounded-2xl overflow-hidden h-[600px]">
            <img
              src={person}
              alt="testimonial"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Logos */}
       <div className="flex flex-wrap justify-center gap-12 mt-16 pb-8">
  <img src={google} alt="google" className="w-39 h-17 object-contain" />
  <img src={facebook} alt="facebook" className="w-39 h-17 object-contain" />
  <img src={youtube} alt="youtube" className="w-39 h-17 object-contain" />
  <img src={pintrest} alt="pinterest" className="w-39 h-17 object-contain" />
  <img src={twitch} alt="twitch" className="w-39 h-17 object-contain" />
</div>


      </div>
    </section>
  );
};

export default CardSection;
