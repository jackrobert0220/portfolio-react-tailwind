import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaSpotify, FaTimes, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const socials = [
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
    // {
    //   id: 5,
    //   child: (
    //     <>
    //       <FaSpotify size={30} />
    //     </>
    //   ),
    //   href: "https://open.spotify.com/artist/7FXugc5Lme1dHnjxD88do4?si=n9eH1rx9QSaSJsyhacFLmQ",
    // },
    {
      id: 5,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jackrobert0220@gmail.com",
      style: "rounded-br-md",
    },
  ];

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "my music",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Jack</h1>
      </div>

      <ul className="flex">
            {socials.map(({ id, child, href }) => (
              <li
                key={id}
                className="p-2 lg:p-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 hover:text-[#47B0AC] duration-200"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>

      <ul className=" hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 hover:text-[#47B0AC] duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-200 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
