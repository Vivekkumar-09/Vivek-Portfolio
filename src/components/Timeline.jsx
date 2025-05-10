import React from "react";
// import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  const workIconStyles = {
    background: '#06D6A0',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const schoolIconStyles = {
    background: '#f9c74f',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const timelineElements = [
    {
      id: 1,
      title: "MIT Academy of Engineering",
      location: "Pune",
      description:
        "B.Tech. - Mechanical Engineering |CGPA:7.65 / 10",
    
      date: "2021 - 2025",
      icon: "school",
    },
    {
      id: 2,
      title: "Jawahar Navodaya Vidyalaya",
      location: "Chandrapur",
      description:"12th | CBSE | Percentage:86.80 / 100",

      date: "2021",
      icon: "school",
    },
    {
      id: 3,
      title: "Jawahar Navodaya Vidyalaya",
      location: "Chandrapur",
      description:
        "10th | CBSE | Percentage:83.40 / 100",

      date: "2019",
      icon: "school",
    },
  ];

  return (
    <section id="journey" className="scroll-mt-12">
    <div className="bg-[#4979b9] py-10 mt-0">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        My Journey
      </h1>
      <VerticalTimeline lineColor="#06D6A0">
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-white"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                <img
                  src={isWorkIcon ? "/icons/work.svg" : "/icons/school.svg"}
                  alt="Education"
                  className="w-8 h-8"
                  aria-label={isWorkIcon ? "Work Icon" : "School Icon"}
                />
              }

              contentStyle={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
            >
              <h3 className="text-xl font-semibold">{element.title}</h3>
              <h5 className="text-md text-gray-600">{element.location}</h5>
              <p className="text-gray-700">{element.description}</p>
              {showButton && (
                <a
                  className={`inline-block mt-4 px-4 py-2 rounded text-white font-medium shadow-md transition hover:scale-105 ${
                    isWorkIcon
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-yellow-500 hover:bg-yellow-600"
                  }`}
                  href={element.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    </section>
  );
}

export default Timeline;
