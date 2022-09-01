import React from 'react'
import Item from './Item'

function ItemList({productos}) {
    return (
        <>  
            <section>
                <div className="row">
                    {productos.map((producto) => {
                        return (
                            <Item key={producto.id} producto={producto} />
                        )
                    })}
                    
                </div>
            </section>
        </>
    )
}

export default ItemList