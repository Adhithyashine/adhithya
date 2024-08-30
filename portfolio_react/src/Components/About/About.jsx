// eslint-disable-next-line no-unused-vars
import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex md:flex-row flex-col overflow-hidden items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="md:w-1/3 w-full mb-6 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <img className="md:h-80 w-full rounded-lg mt-4" src={AboutImg} alt="About img" />
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
                As a frontend developer, I’ve built responsive and visually
                appealing websites using HTML, CSS, and JavaScript. My work
                includes creating a Netflix clone that showcases dynamic content
                and a series of static websites with clean, user-friendly
                designs.
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
                As a backend developer, I’ve designed and implemented
                server-side solutions using Node.js and Express.js. I’ve built
                RESTful APIs for various applications. My experience includes
                developing and managing database schemas with MongoDB.
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
                As a freelance developer, I’ve worked on a variety of web
                development projects, delivering tailored solutions for clients.
                My expertise includes creating responsive websites and
                applications using HTML, CSS, JavaScript, TailwindCSS, and React.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default About;
