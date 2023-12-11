import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/apiService";
import RegisterProduct from "../../components/modal/RegisterProduct";
export default function Products() {
  const headerTitle = ["codigo","Imagen","Nombre","Descripcion","Precio","Stock","Categoria","Accion"]

  const [productos, setProductos] = useState(null);
  useEffect(() => {
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
  return (
    <>
      <div className="py-3">
        <RegisterProduct/>
      </div>
      <div>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {headerTitle.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productos && productos.map((producto) => (
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {producto.id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.imagen}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.nombre}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.descripcion}
                    
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    S/.{producto.precio}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.stock}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                    {producto.idCategoria}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                      Edit
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  )
}
