import React from 'react'
import { useCarrito } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  
  const {carrito, vaciarCarrito, eliminarProducto, precioTotal} = useCarrito();

  console.log(carrito);
  
  return (
    <>
      <h2>Carrito</h2>
      
        <table id="tablaCarrito" className="table table-striped m-5">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Accion</th>
            </tr>
        </thead>
        <tbody id="bodyTabla">
        {carrito.map(item => (
            <tr>
                <th scope="row">Total: ${precioTotal}</th>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>{item.precio}</td>
                <td><button onClick={eliminarProducto(item.id)}>Eliminar</button></td>
            </tr>
      ))}
      </tbody>
      </table>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to={'/'} className="btn btn-primary">volver a inicio</Link>
    </>
  )
}

export default Cart