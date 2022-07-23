import React from "react";
import reactChat from "../assets/react_chat.png";
import djangoGuitars from "../assets/django_guitars.png";
import sappling from "../assets/sappling.png";
import ourlist from "../assets/ourlist.png";
import flappybird from "../assets/flappybird.png";
import tamagotchi from "../assets/tamagotchi.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactChat,
      demo: "https://fathomless-fjord-53432.herokuapp.com/login",
      code: "https://github.com/jackrobert0220/chat-app",
    },
    {
      id: 2,
      src: flappybird,
      demo: "https://plasticrhinogame.netlify.app/",
      code: "https://github.com/jackrobert0220/flappy-rhino",
    },
    {
      id: 3,
      src: sappling,
      demo: "https://sapling-1026.herokuapp.com/",
      code: "https://github.com/jackrobert0220/Sapling-Social-Media-Site",
    },
    {
      id: 4,
      src: ourlist,
      demo: "https://project2ourlist.herokuapp.com/",
      code: "https://github.com/jackrobert0220/CraigsList-Clone",
    },
    {
      id: 5,
      src: tamagotchi,
      demo: "https://jackrobert0220.github.io/Tamagotchi-Project-One/",
      code: "https://github.com/jackrobert0220/Tamagotchi-Project-One",
    },
    {
      id: 6,
      src: djangoGuitars,
      demo: "https://djangoguitars.herokuapp.com/",
      code: "https://github.com/jackrobert0220/Django-Guitars",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#47B0AC]">
            Portfolio
          </p>
          <p className="py-6 text-xl">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="rounded-lg">
              <img
                src={src}
                alt="Preview screenshot of project"
                className="rounded-md duration-200 hover:scale-105 object-scale-down"
              />
              <div className="flex items-center justify-center shadow-md shadow-gray-600 rounded-lg">
                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-[#47B0AC] border-2 hover:border-white border-[#47B0AC] text-white rounded-lg hover:rounded-none"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>

                <a
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-[#47B0AC] border-2 hover:border-white border-[#47B0AC] text-white rounded-lg hover:rounded-none"
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
