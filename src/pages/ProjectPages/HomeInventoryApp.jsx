import ImageCarousel from "../../components/ImageCarousel"

export default function HomeInventoryApp() {
  const homePage = [
    "/InventoryApp/InventoryApp_28.png",
    "/InventoryApp/InventoryApp_29.png",
    "/InventoryApp/InventoryApp_30.png",
    "/InventoryApp/InventoryApp_31.png",
  ]

  const itemCategories = [
    "/InventoryApp/InventoryApp_3.png",
    "/InventoryApp/InventoryApp_4.png",
    "/InventoryApp/InventoryApp_34.png",
    "/InventoryApp/InventoryApp_7.png",
    "/InventoryApp/InventoryApp_9.png",
  ]

  const categoriesPage = [
    "/InventoryApp/InventoryApp_17.png",
    "/InventoryApp/InventoryApp_18.png",
    "/InventoryApp/InventoryApp_24.png",
    "/InventoryApp/InventoryApp_32.png",
    "/InventoryApp/InventoryApp_33.png",
    "/InventoryApp/InventoryApp_35.png",
  ]

  const deleteItems = [
    "/InventoryApp/InventoryApp_13.png",
    "/InventoryApp/InventoryApp_14.png",
    "/InventoryApp/InventoryApp_15.png",
    "/InventoryApp/InventoryApp_16.png",
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold py-6 text-blue-500">Home Page</h1>
        <p className="text-2xl pb-6">The home page displays a list of all items based on date added. There is a search function that allows the user to search by name or category.</p>
        <ImageCarousel images={homePage} />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold py-6 text-blue-500">Adding or Deleting Categories</h1>
        <p className="text-2xl pb-6">You can add or delete categories, a confirmation modal will be shown before deleting.</p>
        <ImageCarousel images={itemCategories} />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold py-4 text-blue-500">Categories Page</h1>
        <p className="text-2xl pb-6">Each category can be clicked and has its own category page which displays all items in that category. You can add or delete items from the category page.</p>
        <ImageCarousel images={categoriesPage} />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold py-4 text-blue-500">Deleting Items</h1>
        <p className="text-2xl pb-6">You can delete an item by clicking the red x or selecting multiple items to delete.</p>
        <ImageCarousel images={deleteItems} />
      </div>
    </div>
  )
}
