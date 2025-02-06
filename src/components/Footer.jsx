import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-white text-black py-12 mt-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="text-black">
          <h2 className="text-3xl font-semibold mb-4">Prescripto</h2>
          <p className="text-sm opacity-75">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>

        {/* Center Section */}
        <div className="text-black">
          <h3 className="text-2xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="text-lg hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-black">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg mb-2">+1-212-456-7890</p>
          <p className="text-lg">greatstackdev@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-black">
        <p className="text-sm opacity-80">
          © 2025 Prescripto. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
