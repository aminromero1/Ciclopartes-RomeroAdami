import React from "react";
import { useCarrito } from "./CartContext"
import { NavLink } from "react-router-dom";


function CartWidget() {

    const { cantidad } = useCarrito();


    if(cantidad > 0) {
        return (
            <NavLink to="/cart">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            {cantidad}
            </NavLink>
        )
    }

}

export default CartWidget;