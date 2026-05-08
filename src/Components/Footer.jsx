import React from "react";
import logo from "../assets/Images/hungzo-logo.png";
import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="
    w-[70px] h-[70px]
    rounded-full
    object-contain
    bg-white
    p-1.5
    shadow-md
  "
            />
            <div>
              <h2 className="text-xl font-semibold text-[#F59E0B]">Hungzo</h2>
              <p className="text-gray-500 text-sm -mt-1">Hunger ka dost</p>
            </div>
          </div>

          <p className="mt-4 text-base text-gray-700 font-medium">Hunger ka dost</p>

          <p className="mt-4 flex items-center gap-2 text-lg text-[#1E3A5F] font-semibold">
            <FaPhoneAlt className="text-[#1E3A5F] text-xl" />

            Call Us:

            <a
              href="tel:9278305565"
              className="font-normal ml-1 hover:text-[#23A989] transition"
            >
              9278305565
            </a>
          </p>
        </div>

        {/* MIDDLE — NOW CLICKABLE */}
        <div>
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Useful links</h3>

          <ul className="space-y-3 text-lg text-[#1E3A5F]">

            <li>
              <Link
                to="/about"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="hover:text-[#23A989] transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="hover:text-[#23A989] transition"
              >
                Contact us
              </Link>
            </li>

            <li>
              <Link
                to="/career"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="hover:text-[#23A989] transition"
              >
                Career
              </Link>
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        {/* RIGHT */}
        <div>
          <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">
            Connect with us
          </h3>

          <div className="grid grid-cols-2 gap-x-16 gap-y-6 w-28">

            <a
              href="https://www.facebook.com/share/1KsLErLu2J/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#145D5D] flex items-center justify-center cursor-pointer hover:scale-105 transition"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#145D5D] flex items-center justify-center cursor-pointer hover:scale-105 transition"
            >
              <FaLinkedinIn className="text-white text-xl" />
            </a>

            <a
              href="https://www.instagram.com/hungzo.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#145D5D] flex items-center justify-center cursor-pointer hover:scale-105 transition"
            >
              <FaInstagram className="text-white text-xl" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#145D5D] flex items-center justify-center cursor-pointer hover:scale-105 transition"
            >
              <FaTwitter className="text-white text-xl" />
            </a>

          </div>
        </div>

      </div>

      <div className="w-full border-t border-gray-200 mt-10"></div>

      <p className="text-center text-sm text-[#1E3A5F] mt-3">
        © {new Date().getFullYear()}, All rights reserved
      </p>
    </footer>
  );
}
