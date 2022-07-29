import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full pt-[6rem] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 sm:p-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#47B0AC]">
            About
          </p>
        </div>
        <p className="text-2xl pt-4">I'm always creating!</p>
        <p className="text-xl mt-10">
          I primarily use <strong>React JS</strong> to build most of my projects, but picking up a
          new framework or language isn't a issue. Lately, I have been utilizing <strong>Tailwind</strong> and learning about its awesome features. I am comfortable working with backend technologies as well.
        </p>

        <br />

        <p className="text-xl">
          I have spent all of my adult life performing rock music. To support my
          journey, I have worked several jobs in hospitality. For the last six
          years, I worked in the funeral industry as a Funeral Director and
          Crematory Operator. It was the perfect opportunity to help people
          through a difficult time. Soon, I became curious about the inner workings of the web-based applications used on the job.
        </p>

        <br />

        <p className="text-xl">
          In 2021, I began taking online courses and attended a bootcamp to deep
          dive into the world of programming. Ever since my first project, I
          have been hooked on learning as much as I can. Just like with making
          music, it is so rewarding to make something and send it off into
          the world and have an impact the lives of others. Currently, I spend
          my time building with React JS and learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
