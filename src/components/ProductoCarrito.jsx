import { useCarritoContext } from "../hook/useCarrito";

// eslint-disable-next-line react/prop-types
const ProductoCarrito = ({ carrito }) => {
    const { actualizarCantidad, eliminarProducto } = useCarritoContext();

    // eslint-disable-next-line react/prop-types
    const { cantidad, descripcion, nombre, precio, id } = carrito;
    return (
        <tr className="bg-slate-300 text-center">
            <td className="border border-gray-400 w-[20%]">{nombre}</td>
            <td className="border border-gray-400 line-clamp-4 ">
                {descripcion}
            </td>
            <td className="border border-gray-400 w-[10%]">
                <input
                    className="border text-center"
                    type="number"
                    value={cantidad}
                    onChange={(e) =>
                        actualizarCantidad({
                            id,
                            cantidad: e.target.value,
                        })
                    }
                />
            </td>
            <td className="border border-gray-400 w-[20%]">{precio}</td>
            <td className="border border-gray-400 w-[20%]">
                {precio * cantidad}
            </td>
            <td className="border border-gray-400 w-[20%]">
                <button
                    type="button"
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => eliminarProducto(id)}
                >
                    X
                </button>
            </td>
        </tr>
    );
};
export default ProductoCarrito;
