import React from "react";
import Iframe from "react-iframe";
import { FaSpotify } from "react-icons/fa";

const Music = () => {
  return (
    <div
      name="my music"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:h-2/3">
     <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#47B0AC]">
            My Music
          </p>
        </div>
          <h2 className="text-xl sm:text-4xl font-bold text-white">
            Check out my band:{" "}
          </h2>
          <h2 className="text-4xl sm:text-7xl font-bold text-white hover:text-[#47B0AC] hover:scale-105 duration-200">
            <a
              href="http://www.plasticrhinoband.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Plastic Rhino</strong>
            </a>
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-xl">
            🎧 Also available on all major streaming platforms
          </p>

          <div className="flex justify-center sm:justify-start">
            <a
              href="https://open.spotify.com/album/2wk0QQLTculUdYSDFMCG7c?si=y_X9GnrBQhm4QM0U1QgQGg"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#47B0AC] to-black-100 cursor-pointer hover:scale-105 duration-200"
            >
              Listen
              <FaSpotify size={25} className="ml-2" />
            </a>
          </div>
        </div>
        <div className="rounded-md mx-auto w-2/3 md:w-[10] mt-4 sm:mt-0 bg-gradient-to-tl p-[6px] from-[#9d023d]  to-black">
          <div className="">
            <Iframe
              src="https://open.spotify.com/embed/album/2wk0QQLTculUdYSDFMCG7c?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
