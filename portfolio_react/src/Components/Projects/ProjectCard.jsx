// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
const ProjectCard = ({ title, main, bannerImg, demoUrl,sourceCode }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="rounded-t-2xl" src={bannerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">
        {main}
      </p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg  md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Demo
          </button>
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
          <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg  md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  bannerImg: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  sourceCode:PropTypes.string.isRequired
};

export default ProjectCard;
