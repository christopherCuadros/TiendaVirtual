// import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ProductoCarrito from "../components/ProductoCarrito";
import { useCarritoContext } from "../hook/useCarrito";

const Carrito = () => {
    const { carrito } = useCarritoContext()
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAcumulado = carrito.reduce(
          (variableTotal, producto) => variableTotal + producto.cantidad * producto.precio,
          0
        );
        setTotal(totalAcumulado);
      }, [carrito]);
    return (
        // <main className=" bg-gray-200 h-[80vh]">
        //     <div className="md:mx-12 xl:mx-[12rem] 2xl:mx-[18rem] md:grid flex flex-col md:flex-none md:grid-cols-3 py-2 bg-red-300 h-auto">
        //         <div className="md:col-[1/3] bg-white md:mx-2 rounded-lg">
        //             <header className="md:ml-5 mt-2">
        //                 <p className="font-bold">Cesta de la compra</p>
        //             </header>
        //             <div className="px-4 xl:px-12 my-5 ">
        //                 <div className="border-b border-gray-300 md:grid md:grid-col-5">
        //                     {/* <img src="" alt="" className="md:col-[1/2]" /> */}
        //                     <div className="md:col-[2/5]">
        //                         <p>P: </p>

        //                         <div className="flex justify-between">
        //                             <p>Precio:</p>
        //                             {/* <div className="flex gap-2 items-center">
        //                                 <button
        //                                         type="button"
        //                                         onClick={disminuir}
        //                                     >
        //                                         <MinusCircleIcon className="h-5 w-5" />
        //                                 </button>
        //                                     <p>{cantidad}</p>

        //                                 <button
        //                                     type="button"
        //                                     onClick={incrementar}
        //                                 >
        //                                     <PlusCircleIcon className="h-5 w-5" />
        //                                 </button>
        //                             </div> */}
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="border-b border-gray-300">HOLA</div>
        //                 <div className="border-b border-gray-300">HOLA</div>
        //             </div>
        //         </div>
        //         <div className="md:col-[3/4] bg-white md:mx-2 border rounded-lg p-4">
        //             <h3>Resumen Total</h3>
        //         </div>
        //     </div>
        // </main>

        <main className="bg-gray-200 h-[80vh]">
            <div className="md:mx-12 xl:mx-[12rem] 2xl:mx-[18rem] md:grid flex flex-col md:flex-none md:grid-cols-3 py-2 bg-red-300 h-auto ">
                <div className="md:col-[1/3] bg-white md:mx-2 rounded-lg">
                    <header className="md:ml-5 mt-2">
                        <p className="font-bold font-sans lg:text-2xl border-b border-black">MI CARRITO</p>
                    </header>
                    <table className="table w-full my-12">
                        <thead>
                            <tr>
                                <th className="w-[20%]" >Producto</th>
                                <th className="w-[20%]" >Descripcion</th>
                                <th className="w-[20%]" >Cantidad</th>
                                <th className="w-[20%]" >Precio unitario</th>
                                <th className="w-[15%]" >Subtotal</th>
                                <th className="w-[5%]" >Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito && carrito.length
                                ? carrito.map((carrito) => (
                                    <ProductoCarrito
                                        key={carrito.id}
                                        carrito={carrito}
                                    />
                                ))
                                : null}
                        </tbody>
                    </table>
                </div>
                <div className="md:col-[3/4] bg-white md:mx-2 border rounded-lg p-4">
                    <div className="border-b border-gray-500">
                        <h3>Resumen Total</h3>
                    </div>
                    <div className="">
                        <p>subTotal</p>
                        <p>{total}</p>
                    </div>
                </div>
            </div>

        </main>
    );
};
export default Carrito;
