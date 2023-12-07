import { Carousel } from "@material-tailwind/react"
import FilterCategory from "../components/FilterCategory"
import ProductsList from "../components/ProductList"
// import CarrouselProducts from "../components/CarrouselProducts"
export default function Home() {
  return (
    <div className="p-2">
      <div className="bg-gray-600 p-5 rounded my-2">
        <FilterCategory/>
      </div>
      <Carousel className="rounded-xl h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

      <div className="grid gap-2 lg:grid-cols-4 mx-auto md:grid-cols-2">
        <ProductsList/>
      </div>
      
    </div>
  )
}
