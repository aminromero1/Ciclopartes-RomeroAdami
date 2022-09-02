import React from 'react'
import { useCarrito } from './CartContext'
import ItemCount from './ItemCount'

function ItemDetail({item}) {
  const { agregarProducto } = useCarrito();

  const onAdd = (contador) => {
    console.log("se compro "+contador+" elementos");
    item.cantidad = contador
    agregarProducto(item)
  }
 
  
  return ( 
        <div className="card shadow-sm">
          <div className="card-body m-5">
            <h6>Nombre: {item.nombre}</h6>
            <img src={item.imagen} alt="" />
            <p>${item.precio}</p>
            <p>{item.descripcion}</p>
            <ItemCount onAdd={onAdd} />
          </div>
      </div>
  )
}
    

      
export default ItemDetail