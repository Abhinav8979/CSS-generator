import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className=" w-full text-gray-300 flex justify-between   md:items-center md:h-screen lg:mt-12 pt-4 lg:pt-0">
      <div className="z-20 pointer-events-none md:text-center max-w-[55%] md:pl-8 leading-tight">
        <h1
          className="md:text-8xl text-3xl font-bold"
          style={{
            textShadow: "0 2px 0 #c6c6c6",
          }}
        >
          Website
        </h1>
        <h1
          className="md:text-7xl text-3xl font-bold"
          style={{
            textShadow: "0 2px 0 #c6c6c6",
          }}
        >
          TO BOOST YOUR
          <br />
          <span
            style={{
              WebkitTextStroke: "white",
              WebkitTextStrokeWidth: "1px",
              WebkitTextFillColor: "black",
            }}
          >
            PRODUCTIVITY
          </span>
        </h1>
        <p className="text-white mt-7 text-sm md:text-base">
          Easily generate CSS code with our user-friendly CSS generator.
          <br className="hidden md:block" /> Streamline web development and
          design with our intuitive tool.
        </p>
      </div>{" "}
      <div className="z-20 mr-12 flex flex-col gap-3 md:gap-7">
        <p className="text-white z-20">
          Generate highly customizable CSS properties. <br /> Preview the
          results before copying them to your website
        </p>
        <button
          className="py-2 mx-2 border border-neutral-300 bg-black  w-[150px] rounded-3xl"
          id="get_started"
        >
          <Link
            to="/cssproperties/list"
            className="flex justify-between items-center px-2"
          >
            <span className="z-10 text-white relative">Get Started</span>
            <span className="text-2xl bg-white text-black w-[30px] rounded-full">
              +
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainContent;
