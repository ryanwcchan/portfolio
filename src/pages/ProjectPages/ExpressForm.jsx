import ImageCarousel from "../../components/ImageCarousel"

export default function ExpressValidatorForm() {
  const images = [
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_1.png",
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_2.png",
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_3.png",
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_4.png",
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_5.png",
    "/portfolio/ExpressValidatorForm/ExpressValidatorForm_6.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Add, Update and Search users</h1>
      <p className="text-2xl pb-6">A simple application that allows user creation, updating and searching. Data is updated on the database.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
