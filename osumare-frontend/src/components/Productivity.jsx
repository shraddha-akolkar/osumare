import React from "react";

// icons (use the images you already have)
import icon01 from "../assets/images/01.png";
import icon02 from "../assets/images/02.png";
import icon03 from "../assets/images/03.png";
import icon04 from "../assets/images/04.png";

import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import card4 from "../assets/images/card-4.png";

const Productivity = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-4xl font-bold text-[#0E1F51] max-w-3xl mx-auto leading-tight mb-16">
          Transform Your Productivity with Our
          Innovative To-Do List Features
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

         {/* Card 1 */}
<div className="bg-[#F9FAFB] rounded-2xl p-8 relative">
  {/* Large background icon */}
  <div className="absolute top-6 right-6 text-5xl font-bold text-gray-200 opacity-50">
    01
  </div>
  
  {/* Main icon with white rounded background */}
  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
    <img src={card1} alt="User Friendly" className="w-10 h-10" />
  </div>

  <h3 className="font-bold text-base text-[#0E1F51] mb-3 relative z-10">
    User-Friendly Interface
  </h3>

  <div className="w-12 h-1 bg-[#FF3E54] rounded mb-4 relative z-10"></div>

  <p className="text-sm text-gray-600 leading-relaxed relative z-10">
    Our platform offers seamless task management to boost your efficiency.
  </p>
</div>
          {/* Card 2 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 relative">
  {/* Large background icon */}
  <div className="absolute top-6 right-6 text-5xl font-bold text-gray-200 opacity-50">
    02
  </div>
  
  {/* Main icon with white rounded background */}
  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
    <img src={card2} alt="Collaborate" className="w-10 h-10" />
  </div>

            <h3 className="font-bold text-base text-[#0E1F51] mb-3 relative z-10">
              Collaborate & Share Effortlessly
            </h3>

            <div className="w-12 h-1 bg-[#FF3E54] rounded mb-4 relative z-10"></div>

            <p className="text-sm text-gray-600 leading-relaxed relative z-10">
              Invite team members to work together and achieve your goals faster.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 relative">
  {/* Large background icon */}
  <div className="absolute top-6 right-6 text-5xl font-bold text-gray-200 opacity-50">
    03
  </div>
  
  {/* Main icon with white rounded background */}
  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
    <img src={card3} alt="Collaboration" className="w-10 h-10" />
  </div>

            <h3 className="font-bold text-base text-[#0E1F51] mb-3 relative z-10">
              Effortless Collaboration
            </h3>

            <div className="w-12 h-1 bg-[#FF3E54] rounded mb-4 relative z-10"></div>

            <p className="text-sm text-gray-600 leading-relaxed relative z-10">
              Invite team members to work together and achieve your goals faster.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 relative">
  {/* Large background icon */}
  <div className="absolute top-6 right-6 text-5xl font-bold text-gray-200 opacity-50">
    04
  </div>
  
  {/* Main icon with white rounded background */}
  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
    <img src={card4} alt="User Friendly" className="w-10 h-10" />
  </div>

            <h3 className="font-bold text-base text-[#0E1F51] mb-3 relative z-10">
              Seamless Access
            </h3>

            <div className="w-12 h-1 bg-[#FF3E54] rounded mb-4 relative z-10"></div>

            <p className="text-sm text-gray-600 leading-relaxed relative z-10">
              Stay connected and manage your tasks on the go with ease.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Productivity;