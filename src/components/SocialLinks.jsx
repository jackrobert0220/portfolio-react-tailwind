import React from "react";
import { FaGithub, FaLinkedin, FaSpotify, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Instagram <BsInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/jackglazzzer/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jackrobert0220/",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jack-glazer/",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://www.twitter.com/jackglazzzer/",
    },
    {
      id: 5,
      child: (
        <>
          Spotify <FaSpotify size={30} />
        </>
      ),
      href: "https://open.spotify.com/artist/7FXugc5Lme1dHnjxD88do4?si=n9eH1rx9QSaSJsyhacFLmQ",
    },
    {
      id: 6,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jackrobert0220@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-r-2xl duration-200 bg-[#47B0AC]" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
