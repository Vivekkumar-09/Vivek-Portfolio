import React from "react";
import Avtar from "../components/Avtar";
import DownloadBtn from "../components/DownloadBtn";

function About() {
  return (
    <section id="about" className="scroll-mt-12">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
        {/* Left - Avatar */}
        <div className="flex-shrink-0 w-1/2 items-center">
          <Avtar />
        </div>

        {/* Right - Text */}
        <div className="max-w-2xl text-center md:text-left font-poppins">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>

          <p className="text-gray-800 text-sm mb-3">
            👋 Hi, I'm Vivek Kumar Singh, a 🎓mechanical engineering student at
            MIT Academy of Engineering, Alandi with a strong interest in
            technology and software development. I'm originally from Chandrapur,
            where I completed my schooling at Jawahar Navodaya Vidyalaya.
          </p>

          <p className="text-gray-800 text-sm mb-3">
            🛠️ While my core academic background lies in mechanical engineering,
            I’ve developed hands-on skills in CAD modeling and simulation. Over
            time, my curiosity led me into the world of programming and web
            development. 🌐
          </p>

          <p className="text-gray-800 text-sm mb-3">
            💻 I’m proficient in Java, Python, and JavaScript, and 🚀 I have
            experience working with Reactjs, Spring Boot and MySQL. I’ve built
            full-stack web applications that prioritize accessibility,
            documentation, and clean code.
          </p>

          <p className="text-gray-800 text-sm mb-3">
            🧩 Through multiple projects, both solo and team-based, I’ve learned
            how to adapt quickly to different workflows and collaborate
            effectively. I believe in building software that solves real-world
            problems in the most efficient way. 🤝
          </p>

          <p className="text-gray-800 text-sm mb-3">
            🎯 I’m also passionate about improving my problem-solving skills
            through regular DSA practice and continuously exploring new tools
            and technologies. 🔍⚙️
          </p>

          {/* Resume download */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="/docs/resume/Vivek_Singh_Resume.pdf"
              download
              className="text-blue-600 text-lg font-semibold hover:underline mb-3"
            >
              Download My Resume
              <DownloadBtn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
