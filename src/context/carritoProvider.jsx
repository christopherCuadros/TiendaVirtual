import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {
    const localStorageValues =
        typeof window !== "undefined" //! Con esto validamos que el codigo de localStorage se ejecute unicamente en el cliente y no en el servidor
            ? JSON.parse(localStorage.getItem("carrito")) ?? [] //* parse convierte de string a arreglo
            : [];

    const [carrito, setCarrito] = useState(localStorageValues);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarCarrito = (producto) => {
        if (carrito.some((productoState) => productoState.id === producto.id)) {
            const carritoActualizado = carrito.map((productoState) => {
                if (productoState.id === producto.id) {
                    productoState.cantidad = producto.cantidad;
                }
                return productoState;
            });

            setCarrito([...carritoActualizado]);
            localStorage.setItem("carrito", JSON.stringify(carrito));
        } else {
            setCarrito([...carrito, producto]);
        }
    };
    // codigo para saber cuantos objetos hay en el array carrito
    const cantidadProductos = () => {
        // console.log(carrito.length);
        return carrito.length;
        // return carrito.length;
    };

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(
            (producto) => producto.id !== id
        );
        setCarrito(carritoActualizado);
    };

    const actualizarCantidad = (producto) => {
        const carritoActualizado = carrito.map((productoState) => {
            if (productoState.id === producto.id) {
                productoState.cantidad = parseInt(producto.cantidad);
            }
            return productoState;
        });
        setCarrito(carritoActualizado);
    };

    return (
        <>
            <CarritoContext.Provider
                    value={{
                        agregarCarrito,
                        eliminarProducto,
                        actualizarCantidad,
                        carrito,
                        cantidadProductos,
                    }}
                >
                    {children}
                </CarritoContext.Provider>
        </>
    );
};
