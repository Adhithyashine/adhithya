// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold"> </h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Company Website"
          main="This is a website created in Html ,CSS and Javascript."
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created in nextjs and used some compontnt library"
        />
        <ProjectCard
          title="Youtube Clone"
          main="this is a blogging website created in nextjs and used some compontnt library"
        />
      </div>
    </div>
  );
};

export default Projects;
