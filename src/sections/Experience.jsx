import { experience } from "../constants/index";
import { useState } from "react";

function ExperienceCard({ title, company, duration, bullets }) {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="text-2xl">{company}</p>
      <p className="text-2xl">{duration}</p>
      {/* <ul className="list-disc pl-4">{bullets ? bullets.map((bullet, index) => 
        <li 
          key={index}
        >
          {bullet}
        </li>) : null}
      </ul> */}
    </div>
  );
}

export default function Experience() {
  const [selectedJobId, setSelectedJobId] = useState(1);

  function handleJobClick(id) {
    setSelectedJobId(id);
  }

  const selectedJob = experience.find((job) => job.id === selectedJobId);

  return (
    <div id="experience" className="flex flex-col max-w-6xl mb-10 h-min-screen w-full">
      <h1
        className="text-4xl text-blue-500 py-6 underline 
        decoration-green-500 font-bold"
      >
        Experience
      </h1>
      <div className="border-4 border-blue-500 rounded-lg overflow-hidden">
        <div className="lg:flex">
          {experience.map((job) => (
                <button
                  key={job.id}
                  className={`w-full font-bold p-4 transition-all duration-300 ease-in-out
                    ${selectedJobId === job.id ? "bg-blue-300 text-black" : ""}`}
                  onClick={() => handleJobClick(job.id)}
                >
                  {job.title}
                </button>
            )
          )}
        </div>
        <div>
          {selectedJob ? (
            <ExperienceCard
              key={selectedJob.id}
              title={selectedJob.title}
              company={selectedJob.company}
              duration={selectedJob.duration}
              bullets={selectedJob.bullets}
            />
            ) : (
              <p>No job selected</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
