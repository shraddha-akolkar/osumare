import React from "react";
import logo from "../assets/images/nav-img.png";

function Footer() {
  return (
    <footer className="bg-white px-6 pt-16 pb-6">
      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + Subscribe */}
          <div>
            <img src={logo} alt="do List" className="w-24 mb-4" />

            <p className="text-sm text-gray-700 mb-4">
              Subscribe to our newsletter for the latest features and updates delivered to you.
            </p>

            <div className="flex gap-3 mb-3">
              <input
                type="email"
                placeholder="Your email here"
                className="border px-3 py-2 text-sm w-full"
              />
              <button className="bg-[#FF3E54] text-white px-5 py-2 text-sm rounded">
                Join
              </button>
            </div>

            <p className="text-xs text-gray-500">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">Facebook</li>
              <li className="flex items-center gap-2">Instagram</li>
              <li className="flex items-center gap-2">X</li>
              <li className="flex items-center gap-2">LinkedIn</li>
              <li className="flex items-center gap-2">YouTube</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 gap-4">
          <p>© 2024 Osumare. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer underline">Privacy Policy</span>
            <span className="cursor-pointer underline">Terms of Service</span>
            <span className="cursor-pointer underline">Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
