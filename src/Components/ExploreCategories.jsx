import React, { useState } from "react";

import Noodles from "../assets/Images/Noodles.png";
import SpiceS from "../assets/Images/SpicesSmall.png";
import Sauces from "../assets/Images/Sauces.png";
import ImpItems from "../assets/Images/ImpItems.png";
import VegetablesSmall from "../assets/Images/VegetableSmall.png";
import Dairy from "../assets/Images/Dairy.png";
import Pulses from "../assets/Images/Pulses.png";
import Coffee from "../assets/Images/Coffee.jpg";

import LimeSeasoning from "../assets/Images/LimeSeasoning.png";
import AromatPowder from "../assets/Images/AromatPowder.png";
import PremiumAromat from "../assets/Images/PremiumAromat.png";
import OreganoSprinkler from "../assets/Images/OreganoSprinkler.png";
import ChilliFlakes from "../assets/Images/ChilliFlakes.png";
import ChilliGarlic from "../assets/Images/ChilliGarlic.png";
import PeriPeri from "../assets/Images/PeriPeri.png";
import PizzaSpice from "../assets/Images/PizzaSpice.png";
import LemonChilli from "../assets/Images/LemonChilli.png";
import ChilliFlakesBig from "../assets/Images/ChilliFlakesBig.png";
import PizzaSpiceBig from "../assets/Images/PizzaSpiceBig.png";

import TomatoMakhani from "../assets/Images/TomatoMakhani.png";
import OnionTomato from "../assets/Images/OnionTomato.png";
import KadhaiGravy from "../assets/Images/KadhaiGravy.png";

import MayoSachet from "../assets/Images/MayoSachet.png";
import MayoChef from "../assets/Images/MayoChef.webp";
import MayoProfessional from "../assets/Images/MayoProfessional.png";

import BurgerMayo from "../assets/Images/BurgerMayo.webp";
import MintMayo from "../assets/Images/MintMayo.png";
import GarlicMayo from "../assets/Images/GarlicMayo.webp";

import ThousandIsland from "../assets/Images/ThousandIsland.webp";
import WhiteCheese from "../assets/Images/WhiteCheese.png";
import GreenChilli from "../assets/Images/GreenChilli.webp";

import PizzaPasta from "../assets/Images/PizzaPasta.webp";
import PizzaTopping from "../assets/Images/PizzaTopping.webp";
import Schezwan from "../assets/Images/Schezwan.webp";

import ChilliSachet from "../assets/Images/ChilliSachet.png";
import OreganoSachet from "../assets/Images/OreganoSachet.png";
import KetchupSachet from "../assets/Images/KetchupSachet.png";

import VanillaFrappe from "../assets/Images/VanillaFrappe.jpeg";
import ChocolateFrappe from "../assets/Images/ChocolateFrappe.jpeg";
import FrappeCoffee from "../assets/Images/FrappeCoffee.jpeg";

export default function ExploreCategories() {

  const categories = [
    { title: "Noodles", items: "20 Items", img: Noodles, bg: "bg-[#FDECEC]" },
    { title: "Spices", items: "23 Items", img: SpiceS, bg: "bg-[#F3FFF3]" },
    { title: "Sauces", items: "9 Items", img: Sauces, bg: "bg-[#F3FFFB]" },
    { title: "Imported Items", items: "40 Items", img: ImpItems, bg: "bg-[#FFF6F2]" },
    { title: "Vegetables", items: "220 Items", img: VegetablesSmall, bg: "bg-[#FFF3FF]" },
    { title: "Dairy", items: "3 Items", img: Dairy, bg: "bg-[#FFFDF5]" },
    { title: "Pulses", items: "10 Items", img: Pulses, bg: "bg-[#F1FFE7]" },
    { title: "Tea & Coffee", items: "10 Items", img: Coffee, bg: "bg-[#F1FFE7]" },
  ];

  const CARD_WIDTH = 240;
  const GAP = 40;
  const STEP = CARD_WIDTH + GAP;
  const VISIBLE_COUNT = 4;
  const MAX_INDEX = Math.max(0, categories.length - VISIBLE_COUNT);

  const [index, setIndex] = useState(0);

  const scrollLeft = () => setIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () => setIndex((prev) => Math.min(prev + 1, MAX_INDEX));

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/*  EXPLORE CATEGORIES                                      */}
      {/* --------------------------------------------------------- */}

      <div className="w-full bg-[#CFE6DD] py-10 md:py-20">

        {/* HEADER */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-20 flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1A1F2F]">
            Explore Categories
          </h2>

          <div className="hidden md:flex items-center gap-10 text-lg font-medium text-[#303030]">
            <button className="text-[#2EC4B6] font-semibold cursor-pointer">All</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Vegetables</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Fruits</button>
            <button className="cursor-pointer hover:text-[#2EC4B6]">Coffee & Tea</button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative w-full">
          <div className="max-w-[1400px] mx-auto relative">

            {/* LEFT BUTTON — Desktop only */}
            <button
              onClick={scrollLeft}
              disabled={index === 0}
              className={`hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md items-center justify-center text-xl transition
              ${index === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}`}
            >
              ‹
            </button>

            {/* MOBILE scroll + DESKTOP transform */}
            <div className="w-full overflow-x-auto md:overflow-hidden px-4 md:px-0 flex md:block gap-6 md:gap-0 scroll-smooth">
              <div
                className="flex items-start md:transition-transform md:duration-500 md:ease-out gap-6 md:gap-10"
                style={{
                  transform:
                    typeof window !== "undefined" && window.innerWidth >= 768
                      ? `translateX(-${index * STEP}px)`
                      : "none",
                }}
              >
                {categories.map((cat, i) => (
                  <div
                    key={i}
                    className={`${cat.bg} min-w-40 md:w-60 p-4 md:p-6 rounded-2xl shadow-md flex flex-col items-center shrink-0
                    transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
                  >
                    <img src={cat.img} className="w-[100px] md:w-[140px] h-[100px] md:h-[140px] object-contain mb-3" />
                    <h3 className="text-lg md:text-xl font-semibold text-[#2A2F4F]">{cat.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{cat.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON — Desktop only */}
            <button
              onClick={scrollRight}
              disabled={index === MAX_INDEX}
              className={`hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-20
              w-12 h-12 rounded-full bg-white border border-[#2EC4B6] shadow-md items-center justify-center text-xl transition
              ${index === MAX_INDEX ? "opacity-30 cursor-not-allowed" : "hover:bg-[#2EC4B6] hover:text-white"}`}
            >
              ›
            </button>

          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/*  PRODUCT SECTIONS                                        */}
      {/* --------------------------------------------------------- */}

      <div className="w-full mt-12 md:mt-24">
        <div className="
  max-w-[1500px]
  mx-auto
  px-4 md:px-16
  flex
  flex-col
  gap-8 md:gap-10
">

          {[
            {
              title: "Top Sells",
              products: [
                {
                  name: "LIME SEASONING",
                  price: "₹210",
                  oldPrice: "₹340",
                  img: LimeSeasoning,
                },
                {
                  name: "AROMAT POWDER",
                  price: "₹160",
                  oldPrice: "₹280",
                  img: AromatPowder,
                },
                {
                  name: "PREMIUM AROMAT POWDER",
                  price: "₹200",
                  oldPrice: "₹330",
                  img: PremiumAromat,
                },
              ],
            },

            {
              title: "Trending Seasonings",
              products: [
                {
                  name: "OREGANO SPICE SPRINKLER",
                  price: "₹230",
                  oldPrice: "₹390",
                  img: OreganoSprinkler,
                },
                {
                  name: "CHILLI FLAKES",
                  price: "₹190",
                  oldPrice: "₹320",
                  img: ChilliFlakes,
                },
                {
                  name: "CHILLI GARLIC SPRINKLER",
                  price: "₹140",
                  oldPrice: "₹220",
                  img: ChilliGarlic,
                },
              ],
            },

            {
              title: "Popular Products",
              products: [
                {
                  name: "PERI PERI SPRINKLER",
                  price: "₹150",
                  oldPrice: "₹230",
                  img: PeriPeri,
                },
                {
                  name: "PIZZA SPICE SPRINKLER",
                  price: "₹190",
                  oldPrice: "₹320",
                  img: PizzaSpice,
                },
                {
                  name: "LEMON CHILLI SPRINKLER",
                  price: "₹110",
                  oldPrice: "₹160",
                  img: LemonChilli,
                },
              ],
            },

            {
              title: "Bulk Packs",
              products: [
                {
                  name: "CHILLI FLAKES 1KG",
                  price: "₹330",
                  oldPrice: "₹620",
                  img: ChilliFlakesBig,
                },
                {
                  name: "PIZZA SPICE SPRINKLER 1KG",
                  price: "₹370",
                  oldPrice: "₹610",
                  img: PizzaSpiceBig,
                },
              ],
            },

            {
              title: "Gravy Base",
              products: [
                {
                  name: "TOMATO MAKHANI GRAVY BASE",
                  price: "₹195",
                  oldPrice: "₹370",
                  img: TomatoMakhani,
                },
                {
                  name: "ONION TOMATO GRAVY BASE",
                  price: "₹140",
                  oldPrice: "₹250",
                  img: OnionTomato,
                },
                {
                  name: "KADHAI GRAVY",
                  price: "₹196",
                  oldPrice: "₹250",
                  img: KadhaiGravy,
                },
              ],
            },

            {
              title: "Mayonnaise",
              products: [
                {
                  name: "Eggless Mayonnaise Sachet",
                  price: "₹293",
                  oldPrice: "₹350",
                  img: MayoSachet,
                },
                {
                  name: "Eggless Mayonnaise Chef's Choice",
                  price: "₹143",
                  oldPrice: "₹190",
                  img: MayoChef,
                },
                {
                  name: "Eggless Mayonnaise Professional",
                  price: "₹130",
                  oldPrice: "₹180",
                  img: MayoProfessional,
                },
              ],
            },

            {
              title: "Dips & Spreads",
              products: [
                {
                  name: "Burger Mayonnaise",
                  price: "₹202",
                  oldPrice: "₹260",
                  img: BurgerMayo,
                },
                {
                  name: "Mint Mayonnaise",
                  price: "₹231",
                  oldPrice: "₹300",
                  img: MintMayo,
                },
                {
                  name: "Garlic Mayonnaise",
                  price: "₹190",
                  oldPrice: "₹260",
                  img: GarlicMayo,
                },
              ],
            },
            {
              title: "Dressings",
              products: [
                {
                  name: "Thousand Island Dressing",
                  price: "₹195",
                  oldPrice: "₹250",
                  img: ThousandIsland,
                },
                {
                  name: "White Cheese Dressing",
                  price: "₹185",
                  oldPrice: "₹240",
                  img: WhiteCheese,
                },
                {
                  name: "Green Chilli Sauce",
                  price: "₹59",
                  oldPrice: "₹90",
                  img: GreenChilli,
                },
              ],
            },

            {
              title: "Pizza & Pasta",
              products: [
                {
                  name: "Pizza & Pasta Sauce",
                  price: "₹185",
                  oldPrice: "₹250",
                  img: PizzaPasta,
                },
                {
                  name: "Pizza Topping",
                  price: "₹172",
                  oldPrice: "₹240",
                  img: PizzaTopping,
                },
                {
                  name: "Schezwan Sauce",
                  price: "₹185",
                  oldPrice: "₹240",
                  img: Schezwan,
                },
              ],
            },

            {
              title: "Seasoning Sachets",
              products: [
                {
                  name: "Chilli Flakes Sachet",
                  price: "₹54",
                  oldPrice: "₹80",
                  img: ChilliSachet,
                },
                {
                  name: "Oregano Seasoning Sachet",
                  price: "₹54",
                  oldPrice: "₹80",
                  img: OreganoSachet,
                },
                {
                  name: "Tomato Ketchup Sachet",
                  price: "₹69",
                  oldPrice: "₹95",
                  img: KetchupSachet,
                },
              ],
            },

            {
              title: "Coffee & Frappe",
              products: [
                {
                  name: "Frappe Mix Vanilla",
                  price: "₹380",
                  oldPrice: "₹450",
                  img: VanillaFrappe,
                },
                {
                  name: "Frappe Mix Chocolate",
                  price: "₹533",
                  oldPrice: "₹620",
                  img: ChocolateFrappe,
                },
                {
                  name: "Frappe Coffee",
                  price: "₹553",
                  oldPrice: "₹650",
                  img: FrappeCoffee,
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="
    mb-4
    bg-[#FAFAFA]
    rounded-3xl
    p-5 md:p-7
    border border-[#ECECEC]
    shadow-sm
    hover:shadow-md
    transition
  "
            >

              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2F] mb-2">{section.title}</h2>
              <div className="h-1 w-20 md:w-24 bg-[#2A2F4F] rounded mb-6"></div>

              {/* MOBILE: horizontal scroll | DESKTOP: vertical list */}
              {/* PRODUCTS SLIDER */}
<div
  className="
    flex
    flex-nowrap
    gap-5
    overflow-x-auto
    scroll-smooth
    hide-scrollbar
    pb-3
    snap-x snap-mandatory
    cursor-grab
    active:cursor-grabbing
  "
  style={{
    WebkitOverflowScrolling: "touch",
  }}
  onWheel={(e) => {
    e.currentTarget.scrollLeft += e.deltaY;
  }}
>

  {section.products.map((p, i) => (
    <div
      key={i}
      className="
        min-w-[300px]
        md:min-w-[380px]
        xl:min-w-[420px]
        shrink-0
        snap-start
        bg-white
        rounded-3xl
        p-5 md:p-6
        flex
        items-center
        gap-5
        border border-[#F1F1F1]
        hover:border-[#2EC4B6]
        hover:shadow-2xl
        transition-all duration-300
      "
    >

      {/* IMAGE */}
      <div
        className="
          w-28 h-28
          md:w-32 md:h-32
          bg-[#F8F8F8]
          rounded-3xl
          flex
          items-center
          justify-center
          overflow-hidden
          shrink-0
          p-3
        "
      >
        <img
          src={p.img}
          alt={p.name}
          className="
            w-full
            h-full
            object-contain
            transition-transform duration-300
            hover:scale-110
          "
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col flex-1 min-w-0">

        <h3
          className="
            text-base
            md:text-lg
            font-bold
            text-[#1A1F2F]
            leading-snug
            line-clamp-2
          "
        >
          {p.name}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Premium Quality Product
        </p>

        <div className="flex items-center gap-3 mt-4 flex-wrap">

          <span className="text-[#23A989] text-2xl font-bold">
            {p.price}
          </span>

          <span className="text-gray-400 line-through text-base">
            {p.oldPrice}
          </span>

        </div>

        <div className="mt-3">
          <span
            className="
              inline-flex
              items-center
              text-xs
              bg-[#E9FBF7]
              text-[#23A989]
              px-3 py-1.5
              rounded-full
              font-semibold
            "
          >
            Best Seller
          </span>
        </div>

      </div>
    </div>
  ))}

</div>

            </div>
          ))}

        </div>
      </div>

    </>
  );
}
