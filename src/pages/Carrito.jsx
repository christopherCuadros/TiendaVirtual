import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

const Carrito = () => {
    return (
        <main className=" my-12 bg-gray-200">
            <div className="md:mx-12 xl:mx-[12rem] 2xl:mx-[18rem] md:grid flex flex-col md:flex-none md:grid-cols-3 py-2">
                <div className="md:col-[1/3] bg-white md:mx-2 rounded-lg">
                    <header className="md:ml-5 mt-2">
                        <h1 className="font-bold">Cesta de la compra</h1>
                    </header>
                    <div className="px-4 xl:px-12 my-5 ">
                        <div className="border-b border-gray-300 md:grid md:grid-col-5">
                            <img src="" alt="" className="md:col-[1/2]" />
                            <div className="md:col-[2/5]">
                                <p>Nombre: </p>
                                <div className="flex justify-between">
                                    <p>Precio:</p>
                                    <div className="flex gap-2 items-center">
                                        <button type="button">
                                            <PlusCircleIcon className="h-5 w-5" />
                                        </button>
                                        <p>1</p>
                                        <button type="button">
                                            <MinusCircleIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-300">HOLA</div>
                        <div className="border-b border-gray-300">HOLA</div>
                    </div>
                </div>
                <div className="md:col-[3/4] bg-white md:mx-2 border rounded-lg p-4">
                    <h3>Resumen Total</h3>
                </div>
            </div>
        </main>
    );
};
export default Carrito;
