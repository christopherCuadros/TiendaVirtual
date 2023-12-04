import CardProduct from "../components/CardProduct"
import FilterCategory from "../components/FilterCategory"
import data from "../data/product.json"
export default function Home() {
  return (
    <div className="p-2 ">
      <div className="my-3 w-28">
        <p className="text-2xl font-semibold">Filtrar</p>
        <FilterCategory/>
      </div>
      <div className="grid gap-2 lg:grid-cols-4 mx-auto md:grid-cols-2">
        {data.map(product =>(
          <CardProduct
            key={product.codigo}
            nombre={product.nombre}
            descripcion={product.descripcion}
            precio={product.precio}
          
          />
        ))}
      </div>

    </div>
  )
}
