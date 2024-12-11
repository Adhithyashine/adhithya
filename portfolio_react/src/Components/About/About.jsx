// eslint-disable-next-line no-unused-vars
import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex md:flex-row flex-col overflow-hidden items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <img
          className="md:h-80 w-full rounded-lg mt-4"
          src={AboutImg}
          alt="About img"
        />
      </div>

      <div className="md:w-2/3 w-full">
        <ul>
          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Frontend developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                As a frontend developer, I specialize in building responsive,
                user-friendly websites with HTML, CSS, JavaScript, and React.
                I’ve created dynamic, visually appealing projects, including a
                Netflix clone and several static websites, all designed to
                provide an intuitive user experience across devices.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Backend developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                In backend development, I focus on creating efficient
                server-side solutions using Node.js and Express.js. I’ve built
                and managed RESTful APIs and designed database schemas with
                MongoDB, ensuring seamless data flow and robust backend systems.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
            <span className="w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Freelance developer
              </h1>
              <p className="text-sm md:text-md leading-tight">
                As a freelance full-stack developer, I’ve delivered custom
                solutions to clients, combining my skills in both frontend and
                backend technologies. I have experience building end-to-end
                applications with React, Node.js, Express.js, and MongoDB, with
                a focus on clean code, scalability, and performance.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
