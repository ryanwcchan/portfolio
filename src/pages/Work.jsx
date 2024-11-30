import { experience } from "../constants"

export default function Work() {
  return (
    <div className="w-full h-full flex min-h-screen justify-center">
      <div>
        <h1 className="text-4xl font-bold">My Experience</h1>
        {experience.map((job) => (
          <div key={job.id} className="my-6">
            <h1 className="text-2xl font-bold text-blue-500">{job.title}</h1>
            <p className="text-1xl">{job.duration}</p>
            <p className="text-1xl font-bold">{job.company}</p>
            <p className="text-1xl">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
