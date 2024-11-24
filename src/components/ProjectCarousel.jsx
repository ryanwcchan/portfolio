import { myProjects } from "../constants";
import { useState } from "react";

export default function ProjectCarousel({ img }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? myProjects.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === myProjects.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-center font-semibold">
        {myProjects[currentSlide].title}
      </h1>
      <div className="flex gap-2 items-center justify-center">
        {myProjects[currentSlide].techStack.map((tool, index) => (
          <div
            key={index}
            className="bg-green-400 dark:bg-green-600 p-2 rounded-lg text-center font-bold
            flex items-center justify-center h-fit"
          >
            {tool}
          </div>
        ))}
      </div>
      <div className="relative flex justify-center items-center">
        {/* Left Arrow Button */}
        <div className="absolute z-50 left-0">
          <button
            onClick={handlePrevClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 rounded-lg"
          >
            &lt;
          </button>
        </div>

        {/* Project Image */}
        <div className="relative flex flex-col items-center">
          <img
            src={
              img
                ? img
                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="Project image"
            className="md:max-w-2xl lg:max-w-2xl w-full h-full object-contain"
          />
          <div className="absolute flex gap-2 bottom-4 text-center">
            {myProjects.map((s, i) => {
              return (
                <div
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 ${
                    i === currentSlide ? "bg-blue-500" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <div className="absolute z-50 right-0">
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 rounded-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
