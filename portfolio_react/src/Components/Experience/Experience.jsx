// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaCss3,
  FaReact,
  FaHtml5,
  FaJs,
  FaBuilding,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#e34f26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61daf8" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#f7df1e" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47a248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiExpress color="#ffff" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#38b2ac" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaBuilding color="#4285f4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
                Web Developer, ZimulateConsultech
              </h2>
              <p className="text-sm leading-tight font-thin">
                sept 2023- present
              </p>
              <ul className="text-sm p-2">
                <li>Worked as Web Developer in Zimulateconsultech.LLP</li>
                <li>Built and deployed the entire website.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaBuilding color="#4285f4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight"> Web Developer, IEDC SNGCE</h2>
              <p className="text-sm leading-tight font-thin">
                sept 2022- july 2024
              </p>
              <ul className="text-sm p-2">
                <li>Worked as web master in IEDC SNGCE.</li>
                <li>Built and deployed wesite.</li>
                <li>Lead and taught interns about web development.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaBuilding color="#4285f4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">
               Web Developer, FuturaLabs
              </h2>
              <p className="text-sm leading-tight font-thin">
                May 2023
              </p>
              <ul className="text-sm p-2">
                <li>Worked as an Intern.</li>
                <li>Built web apps using MERN stack.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
