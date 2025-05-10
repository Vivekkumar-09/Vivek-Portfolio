import React from "react";

function Skills() {

  const skills = [
    { name: "Java", img: "/img/java-original.svg" },
    { name: "Python", img: "/img/python-original.svg" },
    { name: "Javascript", img: "/img/javascript-original.svg" },
    { name: "HTML", img: "/img/html5-original-wordmark.svg" },
    { name: "CSS", img: "/img/css3-original-wordmark.svg" },
    { name: "MySQL", img: "/img/mysql-original-wordmark.svg" },
    { name: "Mongodb", img: "/img/mongodb-original-wordmark.svg" },
    { name: "Matlab", img: "/img/matlab.png" },
    { name: "Catia V5", img: "/img/catia.jpg" },
    { name: "Fusion 360", img: "/img/fusion.png" },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="scroll-mt-12 bg-[#4979b9] py-12 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll gap-8 w-max">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="w-64 bg-white border border-gray-200 rounded-lg shadow-sm  flex-shrink-0"
            >
              <div className="flex flex-col items-center p-6">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={skill.img}
                  alt={skill.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                  {skill.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
