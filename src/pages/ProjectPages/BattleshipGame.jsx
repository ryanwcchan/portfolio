import ImageCarousel from "../../components/ImageCarousel"

export default function BattleshipGame() {
  const images = [
    "BattleshipGame/BattleShip_1.png",
    "BattleshipGame/BattleShip_2.png",
    "BattleshipGame/BattleShip_3.png",
    "BattleshipGame/BattleShip_4.png",
    "BattleshipGame/BattleShip_5.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Battleship</h1>
      <p className="text-2xl pb-6">Created using HTML, CSS, and JavaScript.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
