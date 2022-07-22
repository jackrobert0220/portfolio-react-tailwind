import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="macx-w-screen-lg p-4 sm:p-20 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#47B0AC]">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          doloribus perspiciatis sapiente? Eos magnam unde minus excepturi eius
          veniam id cupiditate. Qui, et delectus quidem suscipit porro itaque
          sit amet possimus. At deserunt iste doloremque consectetur aperiam
          odit hic vero doloribus omnis alias ullam vel, blanditiis quos esse,
          odio voluptates.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          recusandae animi ipsam, unde ad error, blanditiis laudantium quisquam
          cupiditate repellat vitae maxime, veritatis sed ab eligendi voluptates
          incidunt quaerat illum temporibus nihil maiores? Facilis dolores
          perferendis non hic? Porro error libero molestiae alias fuga quisquam
          excepturi dolor quos odio maiores.
        </p>
      </div>
    </div>
  );
};

export default About;
