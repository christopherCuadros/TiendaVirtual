// import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import ProductoCarrito from "../components/ProductoCarrito";
import { useCarritoContext } from "../hook/useCarrito";
import { Card, Typography } from "@material-tailwind/react";
import { postSale } from "../services/apiService";

const Carrito = () => {
    const IGV = 0.18;
    const { carrito } = useCarritoContext()
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const tableHead = ["producto","Descripción","Precio","Cantidad","Subtotal","Accion"]
    useEffect(() => {
        const totalAcumulado = carrito.reduce(
          (variableTotal, producto) => variableTotal + producto.cantidad * producto.precio,
          0
        );
        setSubTotal(totalAcumulado.toFixed(2));
        const getTotalIgv = totalAcumulado*IGV;
        setTotal((totalAcumulado+getTotalIgv).toFixed(2))
      }, [carrito]);

      const saveSale = () =>{
        const bodyCarrito = JSON.stringify(carrito);
        console.log(bodyCarrito)
        const body={
          total:total,
          idUsuario:1,
          detalles:[
            {
              idProducto:bodyCarrito[0].id,
              cantidad:carrito.cantidad,
              precioUnitario: carrito.precio,
              subtotal:(carrito.precio*carrito.cantidad)
            }
          ]
        }
        console.log(JSON.stringify(body));
      }
    
    return (
      <main className="bg-gray-200 h-[80vh] lg:p-2">
        <div className="lg-mx-2 lg:flex lg:flex-row lg:mt-5">
          <div className="bg-white rounded-lg lg:w-4/5 mx-2 h-auto p-2">
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {tableHead.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-black p-4">
                            <Typography
                            variant="small"
                            color="white"
                            className="font-normal leading-none"
                            >
                            {head}
                            </Typography>
                        </th>
                        ))}
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
            </Card>

          </div>
          <div className="bg-white rounded-lg lg:w-[20%] mx-2 h-72">
            <div className="grid m-2 p-2 h-64 ">
                <div className="grid gap-1">
                    <p className="font-bold text-3xl">SUBTOTAL</p>
                    <p className="font-semibold">S/ <span className="font-normal text-2xl">{subTotal}</span></p>
                </div>
                
                <div>
                    <p className="font-semibold">IGV <span className="font-normal text-2xl">18%</span></p>
                </div>
                <div className="flex flex-col">
                    <p className="font-normal text-2xl">Total </p>
                    <span className=" ml-4 text-2xl">{total}</span>
                </div>
                <hr className="border-black" />
                <div>
                    <Typography variant="small" color="white" className="font-normal">
                        <button
                            type="buttom"
                            className="bg-black w-full py-2 rounded "
                            onClick={saveSale}
                            >Pagar</button>
                    </Typography>
                    
                </div>
            </div>
          </div>
        </div>
      </main>
    );
};
export default Carrito;
