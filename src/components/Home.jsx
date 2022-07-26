import React from "react";
import HeroImage from "../assets/guitar.jpg";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-scroll";

//Commented out in case I want to use green social tabs later-----
// import { FaGithub, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa";
// import { BsInstagram } from "react-icons/bs";
// import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pb-[8rem] sm:pb-[16rem] md:pb-[14rem] lg:pb-0 pt-[4rem] md:pt-[0rem]">
        <div className="rounded-2xl mx-auto sm:mx-6 w-2/3 md:w-[10] bg-gradient-to-l p-[6px] from-[#47B0AC]  to-black max-w-[330px]">
          <div>
            <img
              src={HeroImage}
              alt="Jack Glazer playing the guitar at a live event"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mx-5">
          <h2 className="text-4xl  pt-10 sm:text-5xl md:mt-0 font-bold text-white">
            Hi, I'm <span className="text-[#47B0AC]">Jack</span>👋
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            I'm a Front-End Developer.
          </h3>
          <ul className="text-white text-xl py-4">
            <li>
              <span className="text-[#47B0AC]">|</span> Rock Musician{" "}
              <span className="text-[#47B0AC]">|</span>
            </li>
            <li>
              <span className="text-[#47B0AC]">|</span> based in Los Angeles, CA{" "}
              <span className="text-[#47B0AC]">|</span>
            </li>
            <li>
              <span className="text-[#47B0AC]">|</span> former Crematory
              Operator <span className="text-[#47B0AC]">|</span>
            </li>
            <li>
              <span className="text-[#47B0AC]">|</span> Dog Father{" "}
              <span className="text-[#47B0AC]">|</span>
            </li>
          </ul>

          <div className="flex justify-center sm:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#47B0AC] to-black-100 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ImArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
