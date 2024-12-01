import ImageCarousel from "../../components/ImageCarousel"

export default function NASAAPOD() {
  const images = [
    "/portfolio/NASAAPOD/NASA_APOD_1.png",
    "/portfolio/NASAAPOD/NASA_APOD_2.png",
    "/portfolio/NASAAPOD/NASA_APOD_3.png",
    "/portfolio/NASAAPOD/NASA_APOD_4.png",
    "/portfolio/NASAAPOD/NASA_APOD_5.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Astronomy Picture of the Day</h1>
      <p className="text-2xl pb-6">Displays the Astronomy Picture of the Day from NASA. Sometimes the APOD is a video. Title, description and date is displayed in information section.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
