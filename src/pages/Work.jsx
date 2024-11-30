import { experience } from "../constants"
import Block from "../components/Block"

export default function Work() {
  return (
    <div className="w-full h-full flex flex-col min-h-screen max-w-6xl self-center">
      <h1 className="text-4xl font-bold mb-4">My Experience</h1>
      <Block />
      <div className="px-6 bg-gray-50 dark:bg-gray-900 rounded-lg w-full">
        {experience.map((job) => (
          <div key={job.id} className="my-6">
            <h1 className="text-3xl text-blue-500 py-4 underline 
            decoration-green-500 font-bold">{job.title}</h1>
            <p className="text-1xl">{job.duration}</p>
            <p className="text-1xl font-bold">{job.company}</p>
            <p className="text-1xl">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
