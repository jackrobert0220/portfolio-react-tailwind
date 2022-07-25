import React from "react";
import HeroImage from "../assets/guitar.jpg";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          <BsInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/jackglazzzer/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jackrobert0220/",
    },
    {
      id: 3,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jack-glazer/",
    },
    {
      id: 4,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://www.twitter.com/jackglazzzer/",
    },
    {
      id: 5,
      child: (
        <>
          <FaSpotify size={30} />
        </>
      ),
      href: "https://open.spotify.com/artist/7FXugc5Lme1dHnjxD88do4?si=n9eH1rx9QSaSJsyhacFLmQ",
    },
    {
      id: 6,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jackrobert0220@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="rounded-2xl mx-auto w-2/3 md:w-[10] mt-4 sm:mt-0 bg-gradient-to-l p-[6px] from-[#47B0AC]  to-black">
          <div className="">
            <img
              src={HeroImage}
              alt="Jack Glazer playing the guitar at a live event"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:h-2/3">
          <h2 className="text-4xl  pt-10 sm:text-7xl md:mt-0 font-bold text-white">
            Hi, I'm <span className="text-[#47B0AC]">Jack</span>👋
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">
            I'm a Front-End Developer.
          </h3>
          <ul className="text-white text-xl py-4">
            <li>🎸 Rock Musician</li>
            <li>☀️ based in Los Angeles, CA</li>
            <li>🔥 former Crematory Operator</li>
            <li>🐶 Dog Father</li>
          </ul>
          {/* <p className="text-gray-500 py-4 max-w-md">
            Currently, I'm focused on building responsive front-end web
            applications while learning back-end technologies.
          </p> */}

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

          <ul className=" flex lg:hidden">
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="p-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 hover:text-[#47B0AC] duration-200"
          >
          <a href={href} target="_blank"
              rel="noreferrer">
            {child}
            </a>
          </li>
        ))}
      </ul>


        </div>
      </div>
    </div>
  );
};

export default Home;
