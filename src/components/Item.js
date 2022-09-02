import React from 'react'
import { Link} from 'react-router-dom'

function Item({producto}) {
  return (
      <div className="col">
        <div className="card shadow-sm">
            <div className="card-body">
                <h6>{producto.nombre}</h6>
                <img src={producto.imagen} alt="" />
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
                {/* boton con link */}
                <Link to={`/item/${producto.id}`}  className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
      </div>
    )
}

export default Item