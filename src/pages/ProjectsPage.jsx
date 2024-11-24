import ProjectCarousel from "../components/ProjectCarousel"
import Projects from "../sections/Projects"

export default function ProjectsPage() {
  return (
    <div className="w-full h-full flex flex-col items-center min-h-screen">
      <h1 className="text-5xl font-semibold m-6">Featured Projects</h1>
      <div className="flex flex-wrap w-full justify-center">
        {/* <Projects /> */}
        <ProjectCarousel />
      </div>
    </div>
  )
}
