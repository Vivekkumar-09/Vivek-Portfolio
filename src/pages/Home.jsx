import React from "react";
import SocialLinks from "../components/SocialLinks";
import Timeline from "../components/Timeline";
import About from "./About";
import Contact from "./Contact";
import AnimatedText from "../components/AnimatedText";
import Projects from "../section/Projects";
import ProjectCard from "../components/ProjectCard";
import Certificates from "./Certificates";
import CertificatesSec from "../section/CertificatesSec";
import Skills from "./Skills";

function Home() {
  return (
    <>
      {/* ######################################## Home ######################################## */}
      <section id="home" className="scroll-mt-12">
        <div className="bg-[#ede7e1] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-[#003c2f]">
              Vivek Kumar Singh
            </h1>
            <AnimatedText />
            <p className="text-md text-[#003c2f] leading-relaxed max-w-xl">
              👋Hello! My name is Vivek Kumar Singh, and I'm a Mechanical
              Engineer. I'm passionate about building scalable and performant
              web applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 ">
              <button
                type="button"
                className="w-40 h-12 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg hover:rounded-full text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
              >
                Hire Me
              </button>
              <button
                type="button"
                className="w-40 h-12 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg hover:rounded-full text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all duration-300 ease-in-out"
              >
                View Resume
              </button>
            </div>

            {/* Social Icons */}
            <div>
              <SocialLinks />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="/img/working_guy.svg"
              alt="Working Person"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ######################################## About ######################################## */}
      <About />

      {/* ######################################## About ######################################## */}
      <Skills />

      {/* ######################################## Projects ######################################## */}
      <Projects />


      {/* ######################################## Timeline ######################################## */}
      <Timeline />

      {/* ######################################## Projects ######################################## */}
      <CertificatesSec />

      {/* ######################################## Contact ######################################## */}
      <Contact />
    </>
  );
}

export default Home;
