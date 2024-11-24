import ProjectCard from "../components/ProjectCard"
import { myProjects } from "../constants"

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 max-w-6xl mb-10 h-min-screen w-full">
      <h1 className="text-4xl text-blue-500 py-6 underline decoration-green-500 font-bold">Projects</h1>
      <div>
        <h1 className="text-3xl font-semibold">Frontend</h1>
        <div className="grid grid-col-1 lg:grid-cols-2 auto-rows-fr">
          {myProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              tools={project.techStack}
              desc={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
