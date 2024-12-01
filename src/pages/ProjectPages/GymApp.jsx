import ImageCarousel from "../../components/ImageCarousel"

export default function GymApp() {

  const images = [
    "/portfolio/GymApp/1.png", 
    "/portfolio/GymApp/2.png", 
    "/portfolio/GymApp/3.png", 
    "/portfolio/GymApp/4.png", 
    "/portfolio/GymApp/5.png",
    "/portfolio/GymApp/6.png",
    "/portfolio/GymApp/GymApp_8.png",
  ]
  
  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Gym Tracker</h1>
      <p className="text-2xl pb-6">Select workout type, muscle groups and goal and click the generate button to get workout recommendations. Sets can be incremented through user input.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
