import React from 'react'

function ProjectCard() {

    const projects = [
    {
      image: "/docs/certificate1.png",
      techStack: ["React", "Redux", "TypeScript", "CSS", "Azure", "ASP.NET"],
      name: "DrinkTrackr",
      description: "The DrinkTrackr B2B platform enables remote monitoring of drink consumption on a daily, monthly, and yearly basis. This includes beverages such as coffee, cold drinks, and syrup. Consumption reports will be generated based on this data. Additionally, the platform allows for online monitoring of device maintenance status.",
      githubLink: "https://github.com/example/drinktrackr",
      liveLink: "https://drinktrackr.example.com"
    },
    {
      image: "/docs/certificat1.png",
      techStack: ["Vue", "Node.js", "MongoDB"],
      name: "HealthTracker",
      description: "HealthTracker helps users monitor their health vitals and exercise routines with visualizations and alerts.",
      githubLink: "https://github.com/example/healthtracker",
      liveLink: "https://healthtracker.example.com"
    },
    {
      image: "/docs/certificate1.png",
      techStack: ["React", "Redux", "TypeScript", "CSS", "Azure", "ASP.NET"],
      name: "DrinkTrackr",
      description: "The DrinkTrackr B2B platform enables remote monitoring of drink consumption on a daily, monthly, and yearly basis. This includes beverages such as coffee, cold drinks, and syrup. Consumption reports will be generated based on this data. Additionally, the platform allows for online monitoring of device maintenance status.",
      githubLink: "https://github.com/example/drinktrackr",
      liveLink: "https://drinktrackr.example.com"
    },
    {
      image: "/docs/certificate1.png",
      techStack: ["React", "Redux", "TypeScript", "CSS", "Azure", "ASP.NET"],
      name: "DrinkTrackr",
      description: "The DrinkTrackr B2B platform enables remote monitoring of drink consumption on a daily, monthly, and yearly basis. This includes beverages such as coffee, cold drinks, and syrup. Consumption reports will be generated based on this data. Additionally, the platform allows for online monitoring of device maintenance status.",
      githubLink: "https://github.com/example/drinktrackr",
      liveLink: "https://drinktrackr.example.com"
    },
  ];

  return (
    <section className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="w-[420px] max-w-full h-[500px] bg-white shadow-xl rounded-xl overflow-hidden border px-6 py-2 border-gray-200">
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
                <span key={i}>{tech}{i !== project.techStack.length - 1 && ' | '}</span>
              ))}
            </div>

            {/* Title */}
            <h3 className="px-4 py-2 text-xl font-semibold text-gray-800">{project.name}</h3>

            {/* Description */}
            <div className="px-4 mt-2 h-[120px] overflow-hidden hover:overflow-y-auto transition-all duration-300">
              <p className="text-gray-600 text-sm pr-2">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex justify-between items-center px-4 mt-8 text-lg">
              <a
                href={project.githubLink}
                className="flex items-center gap-1 text-gray-600 hover:text-black"
                target="_blank" rel="noopener noreferrer"
              >
                <img src='/icons/github.png' className='w-6 h-6 rounded-full' /> Source Code
              </a>
              <a
                href={project.liveLink}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                target="_blank" rel="noopener noreferrer"
              >
                <img src='/icons/github.png' className='w-4 h-4 rounded' /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard