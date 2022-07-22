import React from "react";
import css from "../assets/skills/css.png";
import django from "../assets/skills/django.png";
import github from "../assets/skills/github.png";
import html from "../assets/skills/html.png";
import javascript from "../assets/skills/javascript.png";
import mongo from "../assets/skills/mongo.png";
import node from "../assets/skills/node.png";
import reactImage from "../assets/skills/react.png";
import tailwind from "../assets/skills/tailwind.png";
import python from "../assets/skills/python.png";
import bootstrap from "../assets/skills/bootstrap.png";
import socket from "../assets/skills/socket.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mongo,
      title: "MongoDB",
      style: "shadow-[#CD7F32]",
    },
    {
      id: 7,
      src: node,
      title: "NodeJS",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 9,
      src: django,
      title: "Django",
      style: "shadow-green-600",
    },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#47B0AC] p-2 inline">
            Experience
          </p>
          <p className="py-6 text-xl">The technologies I have worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
