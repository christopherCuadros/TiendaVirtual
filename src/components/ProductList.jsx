import CardProduct from "./CardProduct"
import data from '../data/product.json'
const ProductsList = () =>{
    
    return(
        <>
            {data.map(producto =>(
                <CardProduct
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}     
                />
            ))}
        </>
    )
}

export default ProductsList;