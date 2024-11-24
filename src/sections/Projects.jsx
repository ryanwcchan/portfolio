import BlueButton from "../components/BlueButton"
import ProjectCarousel from "../components/ProjectCarousel"
import { NavLink } from "react-router-dom"

export default function Projects() {
  return (
    <div className="flex flex-col space-y-4 max-w-6xl mb-10 h-min-screen w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-blue-500 py-6 underline
        decoration-green-500 font-bold">
          Featured Projects
        </h1>
        <BlueButton>
          <NavLink to={"/projects"}>View All</NavLink>
        </BlueButton>
      </div>
      <div>
        {/* <h1 className="text-3xl font-semibold">Frontend</h1> */}
        <ProjectCarousel />
      </div>
    </div>
  )
}
