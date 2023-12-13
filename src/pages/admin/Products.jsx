import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import RegisterProduct from "../../components/modal/RegisterProduct";
import { destroyProduct, getAllProducts } from "../../services/apiService";
import TableHead from "../../components/tables/TableHead";

const iniStateProduct = {
  nombre: "",
  descripcion: "",
  precio: 0,
  stock: 0,
  imagen: "",
  idCategoria: 0,
  estado: true,
};

const headerTitle = [
  "Imagen",
  "Producto",
  "Detalle",
  "Acción"
];

export default function Products() {

  const [productos, setProductos] = useState(null);
  const [product, setProduct] = useState(iniStateProduct);
  const [open, setOpen] = useState(false);

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

  const getProducts = (prod) => {
    const newList = [...productos, prod];
    setProductos(newList);
  };

  const destroyUpdate = async (id) => {
    await destroyProduct(id);
    const lista = [...productos];
    const newlist = lista.filter((pro) => pro.id != id);
    setProductos(newlist);
  };

  const refreshProduct = (prod) => {
    const lista = [...productos];
    const newlist = lista.filter(e => e.id !== prod.id)
    const finalList = [...newlist,prod]
    setProductos(finalList)
  }

  return (
    <>
      <div className="py-3">
        <RegisterProduct
          getProducts={getProducts}
          product={product}
          iniStateProduct={iniStateProduct}
          open={open}
          setOpen={setOpen}
          refreshProduct={refreshProduct}
          setProduct={setProduct}
        />
      </div>
      <div>
        <Card className="h-full w-full overflow-y-scroll">
          <table className="w-full table-auto text-left">
              <TableHead headerTitle={headerTitle} />
            <tbody>
              {productos &&
                productos.map((producto) => (
                  <tr key={producto.id} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {producto.imagen}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as="p"
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        Nombre: <span className="font-light">{producto.nombre}</span>
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Categoria: {producto.idCategoria}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {producto.descripcion}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Precio: S/.{producto.precio}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Stock: {producto.stock}
                      </Typography>
                    </td>
                    <td className="p-4 xl:space-x-2 space-y-2 md:space-y-0">
                      <Button variant="gradient" size="sm" color="amber" onClick={ () => {
                        setProduct(producto)
                        setOpen(!open)
                      } }>
                        Edit
                      </Button>
                      <Button
                        variant="gradient"
                        size="sm"
                        color="red"
                        onClick={() => {
                          if (confirm("¿Esta seguro de eliminar el producto?")) {
                            destroyUpdate(producto.id)
                          }
                        }}
                      >
                        Delet
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
