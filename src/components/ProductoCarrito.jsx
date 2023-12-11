import { useCarritoContext } from "../hook/useCarrito";
import {Typography } from "@material-tailwind/react";
import { TrashIcon, PlusIcon, MinusIcon  } from "@heroicons/react/24/outline";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ProductoCarrito = ({ carrito }) => {
    const { actualizarCantidad, eliminarProducto } = useCarritoContext();

    // eslint-disable-next-line react/prop-types
    const { cantidad, descripcion, nombre, precio, id } = carrito;

    const [newCantidad,setNewcantidad] = useState(cantidad)

    function increase(id){
      setNewcantidad((prevCantidad) => prevCantidad + 1);
      actualizarCantidad({id,cantidad:newCantidad})
    };

    function dismuss (id) {
      setNewcantidad((prevCantidad) => {
        const newCantidad = Math.max(prevCantidad - 1, 1); // Garantiza que la nueva cantidad no sea menor que 1
        console.log("Nueva Cantidad (dismuss):", newCantidad);
        return newCantidad;
      });
      actualizarCantidad({id,cantidad:newCantidad});
    };

    return (
        <tr className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {carrito.nombre}
                </Typography>
              </td>
              <td className="p-4 w-[28rem]">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {carrito.descripcion}
                </Typography>
              </td>
              <td className="p-2 max-w-[3.6rem] bg-green-300">
                <Typography variant="small" className="font-normal">
                  <input
                        className="border text-center w-full"
                        type="number"
                        value={cantidad}
                        min={1}
                        onChange={(e) =>
                            actualizarCantidad({
                                id,
                                cantidad: e.target.value,
                            })
                        }
                    />
                    {/* <div className="flex flex-col items-center">
                      <button className="bg-black lg:w-[80%] rounded flex justify-center" onClick={inc}><PlusIcon class="h-6 w-6 text-white" /></button>
                      <input type="number" value={newCantidad}  className="border-none text-center w-full my-2" />
                      <button className="bg-black lg:w-[80%] rounded flex justify-center" onClick={dismuss(id)}><MinusIcon class="h-6 w-6 text-white" /></button>
                    </div> */}
                </Typography>
              </td>
              <td className="p-4 w-28">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  {carrito.precio}
                </Typography>
              </td>
              <td className="p-4 w-auto">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  {(precio*cantidad).toFixed(2)}
                </Typography>
              </td>
              <td className="p-4 max-w-[1rem]">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                <button
                     type="button"
                     className="bg-black text-white font-bold py-2 px-4 rounded"
                     onClick={() => eliminarProducto(id)}
                 >
                     <TrashIcon class="h-6 w-6 text-white" />
                 </button>
                </Typography>
              </td>
            </tr>
    );
};
export default ProductoCarrito;
