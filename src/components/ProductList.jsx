import CardProduct from "./CardProduct";
import { useState, useEffect } from "react";
import { getAllProducts } from "../services/apiService";

const ProductsList = () => {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {productos &&
        productos.map((producto, index) => (
          <CardProduct
            key={index}
            id={index}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        ))}
    </>
  );
};

export default ProductsList;
