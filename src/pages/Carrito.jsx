import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Carrito = () => {
    const [cantidad, setCantidad] = useState(1);

    const incrementar = () => {
        if (cantidad < 20) {
            setCantidad(cantidad + 1);
        }
    };

    const disminuir = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };
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
                    <div className="px-4 xl:px-12 my-5">
                        <div className=" md:grid md:grid-col-5">
                            <div className="md:col-[2/5]">
                                <div className="flex justify-between">
                                    <p>Producto</p>
                                    <p>Descripcion</p>
                                    <p>Cantidad</p>
                                    <p>precio unitario</p>
                                    <p>Subtotal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-[3/4] bg-white md:mx-2 border rounded-lg p-4">
                    <div className="border-b border-gray-500">
                        <h3>Resumen Total</h3>
                    </div>
                    <div className="">
                        <p>subTotal</p>
                        
                    </div>
                </div>
            </div>
            
        </main>
    );
};
export default Carrito;
