import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 max-w-6xl mb-10 h-min-screen w-full">
      <h1 className="text-4xl text-blue-500 py-6 underline decoration-green-500 font-bold">Projects</h1>
      <div>
        <h1 className="text-2xl font-semibold">Frontend</h1>
        <ProjectCard title={"Shopping Cart"} tools={["React", "React Router", "CSS"]} />
      </div>
    </div>
  )
}
