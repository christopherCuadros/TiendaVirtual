import CardProduct from "./CardProduct"
import data from '../data/product.json'
const ProductsList = () =>{
    
    return(
        <>
            {data.map(producto =>(
                <CardProduct
                    key={producto.codigo}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}     
                />
            ))}
        </>
    )
}

export default ProductsList;