import FilterCategory from "../components/FilterCategory"
import ProductsList from "../components/ProductList"
// import CarrouselProducts from "../components/CarrouselProducts"
export default function Home() {
  return (
    <div className="p-2">
      <div className="bg-gray-600 p-5 rounded my-2">
        <FilterCategory/>
      </div>
      <div className="my-9 bg-red-800">
        <p className="text-4xl font-semibold text-center">Mas Vendidos</p>
        {/* <CarrouselProducts/> */}
      </div>

      <div className="grid gap-2 lg:grid-cols-4 mx-auto md:grid-cols-2">
        <ProductsList/>
      </div>

    </div>
  )
}
