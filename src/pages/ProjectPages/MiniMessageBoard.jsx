import ImageCarousel from "../../components/ImageCarousel"

export default function MiniMessageBoard() {
  const images = [
    "/portfolio/MiniMessageBoard/MiniMessageBoard_1.png",
    "/portfolio/MiniMessageBoard/MiniMessageBoard_2.png",
    "/portfolio/MiniMessageBoard/MiniMessageBoard_3.png",
    "/portfolio/MiniMessageBoard/MiniMessageBoard_4.png",
    "/portfolio/MiniMessageBoard/MiniMessageBoard_5.png",
    "/portfolio/MiniMessageBoard/MiniMessageBoard_6.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Add messages</h1>
      <p className="text-2xl pb-6">Simple message board that allows users to add messages to the database.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
