import React from "react";

function Projects() {
  return (
    <div className="pt-20 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="/project/project1.png" alt="Project 1" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold text-gray-900">Project One</h5>
            <p className="mb-3 text-gray-700">This is a short description of the first project.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="/project/project2.png" alt="Project 2" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold text-gray-900">Project Two</h5>
            <p className="mb-3 text-gray-700">This is a short description of the second project.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
          <a href="#">
            <img className="rounded-t-lg" src="/project/project3.png" alt="Project 3" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-xl font-bold text-gray-900">Project Three</h5>
            <p className="mb-3 text-gray-700">This is a short description of the third project.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ms-2" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Add more cards here similarly if needed */}
      </div>
    </div>
  );
}

export default Projects;
