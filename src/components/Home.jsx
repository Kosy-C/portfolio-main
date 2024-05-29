import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          KOSY CHINWEUBA,
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8892b0]">
          a Full-Stack Software/Product Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer who is passionate about creating scalable
          and robust web applications. I enjoy the Art of Problem-Solving. I am
          a <span className="text-pink-600"> Design Thinker. </span>
        </p>

        <div>
          <a href={'https://www.linkedin.com/in/kosisochukwu-chinweuba/'} target="blank">
            <button
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            >
              Learn More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
