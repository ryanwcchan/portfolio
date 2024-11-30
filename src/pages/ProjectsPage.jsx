import { myProjects } from "../constants"
import ProjectCard from "../components/ProjectCard"

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-[100rem] h-full flex flex-col justify-center items-center min-h-screen mx-auto">
      <h1 className="text-5xl font-semibold m-6">My Projects</h1>
      <h1>Click on project for more details</h1>
      <div className="flex flex-wrap w-full">
        <div className="grid sm:grid-col-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-4 my-6">
          {myProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              tools={project.techStack}
              img={project.image}
              desc={project.description}
              githubLink={project.githubLink}
              liveLink={project.demoLink}
              message={project.message}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
