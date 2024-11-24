import { NavLink } from "react-router-dom";
import { frontendSkills, backendSkills, tools } from "../constants";

function SkillsList({ list, title }) {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-semibold">{title} </h1>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-4 items-center justify-center">
        {list.map((skill, index) => (
          <div
            key={index}
            className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold flex items-center justify-center h-fit"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div id="intro" className="flex flex-col space-y-4 max-w-6xl mb-10 h-min-screen w-full">
      <h1 className="text-4xl text-blue-500 py-6 font-bold">
        My{" "}
        <span className="font-bold underline decoration-green-500">Skills</span>
      </h1>
      <SkillsList list={frontendSkills} title={"Frontend"} />
      <SkillsList list={backendSkills} title={"Backend"} />
      <SkillsList list={tools} title={"Other/Tools"} />
      <h1></h1>
      <div className="flex flex-col gap-20 md:flex-row justify-center items-center py-6">
        <div className="md:w-1/3 md:max-w-[40%] lg:max-w-[30%]">
          <img
            className="h-auto max-h-[400px] md:max-h-[450px] lg:max-h-[500px] min-h-[250px] object-cover border-4 border-blue-500 rounded-xl object-center"
            src="profile-picture.jpeg"
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6 md:w-1/2 md:max-w-[55%] lg:max-w-[60%]">
          <h1 className="text-3xl font-semibold">I love building things</h1>
          <p className="w-full my-2 text-md md:text-lg">
            Ever since I was a kid, I have always loved building and creating
            things. From piecing together my own Lego creations to assembling
            computers with my dad and creating my first 3D animation with
            Blender, the thrill of turning ideas into reality has always driven
            me. This passion naturally evolved as I grew older, leading me to
            find my way in the world of software development.
          </p>
          {/* <p className="w-full my-2 text-md md:text-lg">
                Now, as a software developer, I bring that same curiosity and passion to crafting innovative solutions through clean, functional code. Whether it's building user-friendly interfaces or solving challenging problems, I thrive on turning ideas into reality.
                </p> */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                py-2 px-4 rounded w-32"
          >
            <NavLink to={"/about"}>Read more</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
