import React from "react";
import LandingPageNavBar from "../../components/navbars/LandingPageNavbar";
import hero from "../../assets/svg/hero.svg";
import { eventData } from "../../assets/congif";
import EventLandingCard from "../../components/cards/EventLandingCard";

const LandingPage = () => {
  return (
    <>
      <LandingPageNavBar />
      <div className="h-full w-full bg-[#F4F2F7] px-40">
        <div className=" hero-section grid grid-cols-2">
          <div className="mt-10">
            <p className="text-[80px] text-black font-inter font-semibold">
              Let's Build
            </p>
            <p className="text-[80px] text-black font-inter font-semibold">
              Together
            </p>
            <p className="w-[500px]">
              Our mission is to connect brilliant minds from all corners of the
              globe and provide them with the platform to unleash their
              potential. We organize and host hackathons that are designed to
              inspire, challenge, and propel participants to new heights.{" "}
            </p>

            <button className="w-[350px] block h-12 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95 mt-6">
              Explore Hackathon
            </button>
            <button class="w-[350px] block h-12 bg-gray-200  mt-6 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black font-semibold rounded-[15px] px-4 py-2 transition-transform transform active:scale-95">
              Organise Hackathon
            </button>
          </div>
          <img src={hero} className="mt-12 p-6" alt="hero-img" />
        </div>
        <div className="events-section mt-24">
          <h1 className="text-3xl text-black font-inter font-semibold">
            Upcoming Events
          </h1>
          <div className="flex flex-col ">
            {eventData.map((ele, i) => {
              return <EventLandingCard data={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
