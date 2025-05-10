import React from "react";

function Certificates() {
  const certificateData = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description:
        "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
      image: "/docs/certificate1.png",
      date: "January 10",
      pdfLink: "#",
    },
    {
      id: 2,
      title: "Advanced React Development",
      description:
        "Mastered complex state management, hooks, and performance optimizations.Mastered complex state management, hooks, and performance optimizations.",
      image: "/docs/certificate1.png",
      date: "March 15",
      pdfLink: "#",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      description:
        "Learned efficient problem-solving techniques using JavaScript.",
      image: "/docs/certificate1.png",
      date: "April 22",
      pdfLink: "#",
    },
  ];

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        {certificateData.map((cert) => (
          <div
            key={cert.id}
            className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden m-4 transition transform hover:scale-105"
          >
            <img
              src={cert.image}
              alt="Certificate"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {cert.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
              <div className="flex items-center justify-between">
                <a
                  href={cert.pdfLink}
                  className="inline-flex items-center text-lg text-blue-600 hover:underline font-medium"
                >
                  View PDF
                  <img
                    src="/icons/right-arrow.png"
                    alt="arrow"
                    className="w-4 h-4 ml-1"
                  />
                </a>
                <span className="text-sm text-gray-500">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;