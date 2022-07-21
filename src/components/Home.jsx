import React from "react";
import HeroImage from "../assets/guitar.jpg";
import { ImArrowRight } from "react-icons/im";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:h-2/3">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently, I'm focused on building responsive front-end web
            applications while learning back-end technologies.
          </p>

          <div className="flex justify-center sm:justify-start">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-cenetr rounded-md bg-gradient-to-l from-[#47B0AC] to-black-100 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ImArrowRight size={25} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div className="rounded-2xl mx-auto w-2/3 md:w-[10] mt-4 sm:mt-0 bg-gradient-to-l p-[6px] from-[#47B0AC]  to-black">
          <div className="">
            <img
              src={HeroImage}
              alt="Jack Glazer playing the guitar at a live event"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;