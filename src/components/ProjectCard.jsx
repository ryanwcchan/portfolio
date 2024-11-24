export default function ProjectCard({ title, img, tools, desc }) {
  return (
    <div className="flex flex-col items-center space-y-4 m-5 justify-center">
        <h2 className="text-3xl text-center text-blue-500 underline
        decoration-green-500 font-semibold">
          {title}
        </h2>
        <div className="flex gap-2">
          {tools.map((item) => (
            <div
              key={item}
              className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold
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
    </div>
  )
}
