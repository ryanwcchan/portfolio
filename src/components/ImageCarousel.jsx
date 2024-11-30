import { useState } from "react";

export default function ImageCarousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center">
        {/* Left Arrow Button */}
        <div className="left-0">
          <button
            onClick={handlePrevClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 text-2xl lg:text-3xl"
          >
            &lt;
          </button>
        </div>

        {/* Project Image */}
        <div className="flex flex-col items-center border-4 border-blue-500 rounded-sm">
          <div className="w-[100%] h-[100%] max-h-[30rem] bg-slate-950 flex justify-center">
            <img
              src={
                images[currentSlide]
                  ? images[currentSlide]
                  : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt={`Project image ${currentSlide + 1}`}
              className="object-contain"
            />
          </div>
          <div className="flex gap-2 bottom-4 text-center py-4 bg-green-500 w-full items-center justify-center">
            {images.map((_, i) => (
              <div
                key={"circle" + i}
                className={`rounded-full w-5 h-5 ${
                  i === currentSlide ? "bg-blue-500" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <div className="right-0">
          <button
            onClick={handleNextClick}
            className="bg-blue-500 hover:bg-blue-300 text-gray-200 font-bold py-2 px-4 text-2xl lg:text-3xl"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
