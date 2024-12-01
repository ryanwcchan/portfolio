import ImageCarousel from "../../components/ImageCarousel"

export default function ShoppingCart() {
  const images = [
    "/portfolio/ShoppingCart/ShoppingCart_1.png",
    "/portfolio/ShoppingCart/ShoppingCart_2.png",
    "/portfolio/ShoppingCart/ShoppingCart_3.png",
    "/portfolio/ShoppingCart/ShoppingCart_4.png",
    "/portfolio/ShoppingCart/ShoppingCart_5.png",
    "/portfolio/ShoppingCart/ShoppingCart_6.png",
    "/portfolio/ShoppingCart/ShoppingCart_7.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Fake Store</h1>
      <p className="text-2xl pb-6">Each product has its own dynamic product page. On the cart page, the quantity can be manually changed through user input.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
