// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className=" flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <a
          href="mailto:adhithyashine@gmail.com"
          className="hover:underline"
          target="_blank"
        >
          <li className="flex gap-2 items-center">
            <MdOutlineEmail size={20} />
            adhithyashine@gmail.com
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/adhithya-shine-236732229/"
          className="hover:underline"
          target="_blank"
        >
          <li className="flex gap-2 items-center">
            <CiLinkedin size={20} />
            linkedin.com/in/adhithya-shine
          </li>
        </a>

        <a href="https://github.com/Adhithyashine"
        className="hover:underline"
        target="_blank">
          <li className="flex gap-2 items-center">
            <FaGithub size={20} />
            github.com/Adhithyashine
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;