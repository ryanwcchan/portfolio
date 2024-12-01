import ImageCarousel from "../../components/ImageCarousel"

export default function ExpressValidatorForm() {
  const images = [
    "/ExpressValidatorForm/ExpressValidatorForm_1.png",
    "/ExpressValidatorForm/ExpressValidatorForm_2.png",
    "/ExpressValidatorForm/ExpressValidatorForm_3.png",
    "/ExpressValidatorForm/ExpressValidatorForm_4.png",
    "/ExpressValidatorForm/ExpressValidatorForm_5.png",
    "/ExpressValidatorForm/ExpressValidatorForm_6.png",
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold py-6 text-blue-500">Add, Update and Search users</h1>
      <p className="text-2xl pb-6">A simple application that allows user creation, updating and searching. Data is updated on the database.</p>
      <ImageCarousel images={images} />
    </div>
  )
}
