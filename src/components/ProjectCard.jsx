import SocialMediaIcon from "./SocialMediaIcon";

export default function ProjectCard({ title, img, tools, desc, githubLink, liveLink, message }) {
  return (
    <div className="flex flex-col items-center space-y-4 justify-center">
        <h2 className="text-3xl text-center text-blue-500 underline
        decoration-green-500 font-semibold">
          {title}
        </h2>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {tools.map((item) => (
            <div
              key={item}
              className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold text-sm
              flex items-center justify-center h-fit"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="border-8 border-blue-500 rounded-lg overflow-hidden flex">
          <img
              src={img ? img :"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
              alt="Image of project"
          />
        </div>
        {/* <p className="text-center">{desc ? desc : "Description"}</p> */}
        <div className="flex gap-2 items-center justify-center">
          <SocialMediaIcon icon="github" href={githubLink} />
          {liveLink ? (
              <a href={liveLink} target="_blank" className="text-blue-500 font-bold text-2xl">Live Demo</a>
            ) : (
              <span className="text-gray-500 font-bold text-2xl">Live Demo</span>
            )
          }
        </div>
        {message ? (
          <p className="text-center">{message}</p>
        ) : (
          ""
        )}
    </div>
  )
}
