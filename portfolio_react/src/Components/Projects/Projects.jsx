// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";
import zim from '.././../assets/zim.png';
import iedc from '../../assets/iedc.png';
import adhi from '../../assets/adhi.png';

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold"> </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Company Website"
          main="This is a website created in HTML ,CSS and Javascript."
          bannerImg={zim}
          demoUrl='https://www.zimulateconsultech.in'
          sourceCode='https://github.com/Adhithyashine/Zimulate-Consultech'
        />
        <ProjectCard
          title="Community Website"
          main="This is a  website created in HTML, CSS and Javascript."
          bannerImg={iedc}
          demoUrl="https://www.iedcsngce.com"
          sourceCode='https://github.com/Adhithyashine/IEDC-SNGCE'
        />
        <ProjectCard
          title="Portfolio Website"
          main="This website is created in HTML, CSS, Javascrip, React and Tailwind css."
          bannerImg={adhi}
        /> 
        
      </div>
    </div>
  );
};

export default Projects;
