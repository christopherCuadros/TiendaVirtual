import { useContext } from "react";
import {CarritoContext} from "../context/carritoProvider"

//! EN DONDE LO USEMOS RECUERDA COLOCAR "use client"
export const useCarritoContext = () => {
    const values = useContext(CarritoContext);
    if (!values) throw new Error("valores no encontrados");
    return values;
};
