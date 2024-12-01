import ImageCarousel from "../../components/ImageCarousel"

export default function MemoryCardGame() {
  const images = [
    "/portfolio/MemoryCardGame/MemoryCardGame_1.png",
    "/portfolio/MemoryCardGame/MemoryCardGame_2.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Memory Card Game</h1>
      <p className="text-2xl pb-6">Click every card once but not more than once. Used the Yugioh! API to get card details. </p>
      <ImageCarousel images={images} />
    </div>
  )
}
