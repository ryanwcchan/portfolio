import { education } from "../constants"

export default function Education() {
  return (
    <div className="flex flex-col max-w-6xl mb-10 h-min-screen w-full">
      <h1 className="text-4xl text-blue-500 py-6 underline 
      decoration-green-500 font-bold"
      >
        Education
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h1 className='text-4xl font-bold'>{education.school}</h1>
          <div>
            <p className="text-2xl italic font-semibold">{education.duration}</p>
            <p className="lg:text-right">{education.location}</p>
          </div>
        </div>
        <p className="text-[1.2rem]">{education.degree}, {education.major}</p>
      </div>
    </div>
  )
}
