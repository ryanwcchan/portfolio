import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="text-5xl font-semibold m-6">Featured Projects</h1>
      <div className="flex flex-wrap w-full justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
