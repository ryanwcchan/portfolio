import ImageCarousel from "../../components/ImageCarousel"

export default function BattleshipGame() {
  const images = [
    "/portfolio/BattleshipGame/BattleShip_1.png",
    "/portfolio/BattleshipGame/BattleShip_2.png",
    "/portfolio/BattleshipGame/BattleShip_3.png",
    "/portfolio/BattleshipGame/BattleShip_4.png",
    "/portfolio/BattleshipGame/BattleShip_5.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Battleship</h1>
      <p className="text-2xl pb-6">Created using HTML, CSS, and JavaScript.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
