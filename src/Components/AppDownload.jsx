import React from "react";
import phone from "../assets/Images/phone.png";
import appstore from "../assets/Images/Appstore.png";
import playstore from "../assets/Images/Playstore.png";

export default function AppDownload() {
  return (
    <section className="w-full px-6 md:px-20 py-16 md:py-24 bg-linear-to-b from-white to-[#F8FAFC] mt-20">
      
      <div
        className="
          max-w-7xl mx-auto
          rounded-4xl
          bg-white
          shadow-sm
          border border-gray-100
          px-6 md:px-14
          py-10 md:py-14
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-10
          overflow-hidden
        "
      >

        {/* LEFT CONTENT */}
        <div className="w-full md:w-[55%] text-center md:text-left">

          <h2
            className="
              leading-tight
              text-[30px]
              sm:text-[36px]
              md:text-[46px]
              font-bold
              text-[#1D2A49]
            "
            style={{
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Shop Faster With <br className="hidden md:block" />
            Hungzo App
          </h2>

          <p
            className="
              mt-4
              text-[15px]
              md:text-[17px]
              text-gray-500
            "
            style={{
              fontFamily: "Quicksand, sans-serif",
            }}
          >
            Available on both IOS & Android
          </p>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4 mt-10">

            <a
              href="https://apps.apple.com/in/app/hungzo/id6763050400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appstore}
                className="
                  h-[58px]
                  object-contain
                  hover:scale-105
                  transition duration-300
                "
                alt="App Store"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.hungzo.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playstore}
                className="
                  h-[61px]
                  object-contain
                  hover:scale-105
                  transition duration-300
                "
                alt="Play Store"
              />
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[45%] flex items-center justify-center relative">

          {/* Glow Background */}
          <div className="absolute w-[280px] h-[280px] bg-orange-100 rounded-full blur-3xl opacity-40"></div>

          <img
            src={phone}
            alt="Hungzo App"
            className="
              relative
              w-60
              sm:w-[280px]
              md:w-[360px]
              lg:w-[420px]
              rotate-[8deg]
              drop-shadow-2xl
              hover:scale-105
              transition duration-500
            "
          />
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex md:hidden justify-center gap-3 mt-2">

          <a
            href="https://apps.apple.com/in/app/hungzo/id6763050400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appstore}
              className="h-[38px] object-contain"
              alt="App Store"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.hungzo.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={playstore}
              className="h-[42px] object-contain"
              alt="Play Store"
            />
          </a>

        </div>

      </div>
    </section>
  );
}