import React from "react"; 
import img from "../assets/images/nav-img.png";

function Navbar() {
  return (
    <header className="bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <img src={img} alt="Logo" className="w-28" />

        <nav className="hidden md:flex items-end gap-9 ml-40 text-[17px] font-semibold bg-[#FFFFFF]">
          <span className="cursor-pointer ml-38  text-[#0E1F51]">About Us</span>
          <span className="cursor-pointer  text-[#0E1F51]">Features</span>
          <span className="cursor-pointer  text-[#0E1F51]">More Option</span>
          <span className="cursor-pointer   text-[#0E1F51]">Contact</span>
        </nav>

        <div className="flex items-center gap-3">
          <button className="w-28 hidden md:block text-[17px] px-4 py-2 border border-[#FF3E54] text-[#FF3E54] rounded">
            Log In
          </button>

          <button className="w-28 text-[17px] px-4 py-2 bg-[#FF3E54] text-white rounded">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
