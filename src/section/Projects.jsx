import React from "react";
import { Link } from "react-router";

function Projects() {
  const projects = [
    {
      image: "/docs/capstone.jpg",
      techStack: ["AI-ML", "Gemini", "OCR", "Text-to-Speech"],
      name: "SightSpeak",
      description:
        "Helps visually impaired peoples to persive their surrounding. The project demonstrated image-to-audio system that enhances accessibility for visuallyimpaired individuals using OCR, Generative AI, and Text-to-Speech.It enables users to understand surroundings, read visual content, and interact with documentsthrough auditory feedback, promoting independence and better navigation.This practical solution marks a significant advancement in inclusive technology, improvingquality of life for visually impaired users.",
      liveLink: "https://github.com/om-okg/Ai_Vision",
    },
    {
      image: "/docs/majorProject.jpg",
      techStack: ["AI-ML", "Python", "CNN", "Jupyter-Notebook"],
      name: "Defect-Detective",
      description:
        "Develop a machine learning system for automated quality assessment in manufacturing,leveraging data from images to swiftly detect defects.The CNN-based defect detection system significantlyimproved manufacturing quality control with high accuracy.Ongoing enhancements aim to boost performance andbroaden applicability across diverse industrial settings.",
      githubLink: "https://github.com/Vivekkumar-09/DefectDection",
      // liveLink: "https://healthtracker.example.com",
    },
    {
      image: "/docs/cad_bus.jpg",
      techStack: [""],
      name: "BUS Analysis",
      description:
        "PBL Project- Innovative Airflow Solutions forBuses: Balancing Comfort and Efficiency",
      // githubLink: "https://github.com/example/drinktrackr",
      // liveLink: "https://drinktrackr.example.com",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-12">
      <div className="pt-20 px-4 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[420px] max-w-full h-[500px] bg-white shadow-xl rounded-xl overflow-hidden border px-6 py-4 border-gray-200 hover:shadow-2xl transition-shadow"
            >
              {/* Image */}
              <div className="h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Tech Stack */}
              <div className="px-4 py-2 text-xs text-green-700 font-semibold flex flex-wrap gap-x-1">
                {project.techStack.map((tech, i) => (
                  <span key={i}>
                    {tech}
                    {i !== project.techStack.length - 1 && " | "}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="px-4 py-2 text-xl font-semibold text-gray-800">
                {project.name}
              </h3>

              {/* Description */}
              <div className="px-4 mt-2 h-[100px] overflow-hidden hover:overflow-y-auto transition-all duration-300">
                <p className="text-gray-600 text-sm pr-2">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex justify-between items-center px-4 mt-6 text-sm">
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1 text-gray-600 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/github.png"
                    className="w-5 h-5 rounded-full"
                    alt="GitHub"
                  />
                  Source Code
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/icons/github.png"
                    className="w-5 h-5 rounded-full"
                    alt="Live Demo"
                  />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      <div className="flex justify-center mt-10 pb-10">
        <Link
          to="/projects"
          className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-all"
        >
          See All Projects →
        </Link>
      </div>
      </div>
    </section>
  );
}

export default Projects;
