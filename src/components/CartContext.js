import React from "react";
import { createContext, useContext, useState } from "react";

export const contexto = createContext(); 

const { Provider } = contexto; 
 
export const useCarrito = () => {
    return useContext(contexto);
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    // const [total, setTotal] = useState(0);


    const agregarProducto = (producto) => {
        console.log("Soy el contexto!")
        console.log(producto)
        //cantidad = cantidad + producto.cantidad;
        setCantidad(cantidad + producto.cantidad)
    }
    const eliminarProducto = (id) => {
        // eliminar el producto del carrito
        setCantidad(cantidad - id.cantidad)
        setCarrito(carrito.filter(producto => producto.id !== id))

    }

    const vaciarCarrito = () => {
        setCantidad(0)
        setCarrito([])
    }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
    }
    // const precioTotal = () => {
    //     carrito.forEach(producto => {
    //         setTotal(total + producto.precio * producto.cantidad)
    //     } )
    // }
    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;