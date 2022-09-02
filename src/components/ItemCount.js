import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(0)
    
    initial = 1;

    const sumar = () => {
        if (stock === 0 || contador === stock) {
            console.log("No se puede incrementar");
        } else {
            setContador(contador + 1)
            console.log("incrementando");
            console.log(contador+1);
        }
    };

    const restar = () => {
        if (contador === 0) {
            console.log("No se puede decrementar");
        } else {
            setContador(contador - 1)
            console.log("decrementando");
            console.log(contador);
        }
    };

    function comprar(){
        console.log("se compro "+contador+"elementos");
        onAdd(contador)
        
    }
    return (
        <div className="container d-flex borde">
            <button className="btn btn-outline-secondary" onClick={restar}>-</button>
            <p className="m-2">cantidad: {contador}</p>
            <button className="btn btn-outline-secondary" onClick={sumar}>+</button>

            <Link to={'/cart'} className="btn btn-outline-secondary" onClick={comprar}>Terminar mi compra</Link>
        </div>
    );
};

export default ItemCount;
