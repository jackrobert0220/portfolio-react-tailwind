import React from 'react'
import { FaGithub, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SocialBar = () => {

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
    <div name="home" className="flex w-full h-15 bg-black flex-col items-center  pt-[5rem] lg:hidden">
      <ul className="flex">
        {socials.map(({ id, child, href }) => (
          <li
            key={id}
            className="p-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-110 hover:text-[#47B0AC] duration-200"
          >
            <a href={href} target="_blank" rel="noreferrer">
              {child}
            </a>
          </li>
        ))}
      </ul>
      </div>
  )
}

export default SocialBar