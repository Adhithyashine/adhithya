// eslint-disable-next-line no-unused-vars
import React from "react";
import avatarImg from "../../assets/dev.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          a passionate and aspiring full-stack developer specializing in the
          MERN stack. .
        </p>
        <button className=" mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="2/6" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;