import ImageCarousel from "../../components/ImageCarousel"

export default function GymApp() {

  const images = [
    "GymApp/1.png", 
    "GymApp/2.png", 
    "GymApp/3.png", 
    "GymApp/4.png", 
    "GymApp/5.png",
    "GymApp/6.png",
    "GymApp/GymApp_8.png",
  ]
  
  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Gym Tracker</h1>
      <p className="text-2xl pb-6">Select workout type, muscle groups and goal and click the generate button to get workout recommendations. Sets can be incremented through user input.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
