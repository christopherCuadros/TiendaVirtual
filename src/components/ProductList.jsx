import CardProduct from "./CardProduct"
import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiService";

const ProductsList = () =>{
    const [productos, setProductos] = useState(null);
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //       const response = await fetch(`${BASE_ROUTE}/producto`);
        //       // Verifica si la respuesta es exitosa (código de estado 2xx)
        //       if (response.ok) {
        //         const data = await response.json();
        //         setProductos(data);
        //       } else {
        //         console.error("Respuesta no exitosa:", response);
        //         throw new Error("Error al obtener datos");
        //       }
        //     } catch (error) {
        //       console.error("Error al realizar la solicitud:", error); // Puedes ajustar esto según tus necesidades
        //     }
        //   };
      
        //   fetchData();
        const fetchData = async () => {
            try {
              const data = await getAllProducts();
              setProductos(data);
            } catch (error) {
              console.error('Error al obtener productos', error);
            }
          };
      
          fetchData();
      }, []);

    return(
        <>
            {productos && productos.map((producto, index) =>(
                <CardProduct
                    key={index}
                    id={index}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}     
                />
            ))}
        </>
    )
}

export default ProductsList;