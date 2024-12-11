// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";
import zim from '.././../assets/zimulateweb.png';
import iedc from '../../assets/iedc.png';
import adhi from '../../assets/adhi.png';
import weather from '../../assets/weather.png'
import ecom1 from '../../assets/ecom1.png'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold"> </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Company Website"
          main="This is a landing page website that i created for Zimulate, a tech startup.The language and frameworks used are HTML, CSS, Javascript, React and Tailwind css."
          bannerImg={zim}
          demoUrl='https://www.zimulateconsultech.in'
          sourceCode='https://github.com/Adhithyashine/zimulate-react'
        />
        <ProjectCard
          title="Community Website"
          main="This is the website fo  IEDC SNGCE which i built using html css and javascript."
          bannerImg={iedc}
          demoUrl="https://www.iedcsngce.com"
          sourceCode='https://github.com/Adhithyashine/IEDC-SNGCE'
        />
        <ProjectCard
          title="Portfolio Website"
          main="This my portfolio website which  is built in HTML, CSS, Javascrip, React and Tailwind css."
          bannerImg={adhi}
          demoUrl="https://www.adhithyashine.in"
          sourceCode="https://github.com/Adhithyashine/adhithya"
        /> 
        <ProjectCard
          title="Weather App"
          main="This is a simple Weather app. This is  built using HTML, CSS, and Javascrip."
          bannerImg={weather}
          demoUrl="https://weather-app-bay-kappa-29.vercel.app/"
          sourceCode="https://github.com/Adhithyashine/weather-app"
        /> 
         <ProjectCard
          title="Online Clothing Brand"
          main="This a fullstack online Clothing app built with MERN Stack.This is one of my Freelace projects."
          bannerImg={ecom1}
          demoUrl="https://dnddesigns.uk"
          sourceCode="https://github.com/Adhithyashine/"
        /> 
        
      </div>
    </div>
  );
};

export default Projects;
