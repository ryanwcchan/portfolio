import { myProjects } from "../constants"
import { useParams } from "react-router"
import HomeInventoryApp from "./ProjectPages/HomeInventoryApp";
import ShoppingCart from "./ProjectPages/ShoppingCart";
import GymApp from "./ProjectPages/GymApp";
import TranscriptionApp from "./ProjectPages/TranscriptionApp";
import NASAAPOD from "./ProjectPages/NASAAPOD";
import MiniMessageBoard from "./ProjectPages/MiniMessageBoard";
import ExpressValidatorForm from "./ProjectPages/ExpressForm";
import MemoryCardGame from "./ProjectPages/MemoryCardGame";
import BattleshipGame from "./ProjectPages/BattleshipGame";
import { useNavigate } from "react-router";

export default function ProjectDetailsPage() {
  const { title } = useParams();
  const navigate = useNavigate();

  const project = myProjects.find(
    (project) => project.title === decodeURIComponent(title)
  )

  const projectComponents = {
    "Home Inventory App": <HomeInventoryApp />,
    "Shopping Cart": <ShoppingCart />,
    "Gym Workout App": <GymApp />,
    "Transcription App": <TranscriptionApp />,
    "NASA APOD": <NASAAPOD />,
    "Mini message board": <MiniMessageBoard />,
    "Express Validator Form": <ExpressValidatorForm />,
    "Memory Card Game": <MemoryCardGame />,
    "Battleship Game": <BattleshipGame />,
  }

  if (!project) {
    return (
      <div className="w-full h-full min-h-screen">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-2xl">Sorry, there was trouble loading this project.</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full min-h-screen max-w-6xl flex flex-col mx-auto">
      <div className="mb-[2rem]">
        <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {project.techStack.map((item) => (
            <div
              key={item}
              className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold text-sm
              flex items-center justify-center h-fit"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="text-2xl">Description: {project.description}</p>
        <div className="flex flex-col gap-2">
          <div className="text-lg"><span className="font-bold text-blue-500">Github:</span> <a href={project.githubLink} target="_blank">{project.githubLink}</a></div>
          <div className="text-lg"><span className="font-bold text-blue-500">Live Link:</span> <a href={project.demoLink} target="_blank">{project.demoLink ? project.demoLink : "Not Available"}</a></div>
        </div>
      </div>
      {projectComponents[project.title]}
    </div>
  )
}
