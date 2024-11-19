export default function ProjectCard({ title, img, tools }) {
  return (
    <div className="flex flex-col items-center space-y-4 m-10">
        <h2 className="text-4xl text-blue-500 underline decoration-green-500 font-semibold">{title}</h2>
        <div className="flex gap-2">
          {tools.map((item) => (
            <div
              key={item}
              className="bg-green-600 p-2 rounded-lg text-center font-bold
              flex items-center justify-center h-fit"
            >
              {item}
            </div>
          ))}
        </div>
        <img 
            src={img ? img :"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} 
            alt="" 
        />
    </div>
  )
}
