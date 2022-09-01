import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"


function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        setLoading(true)
        const pedido = fetch("./arrayProductos.json")
        pedido.then(res => {
            return res.json()
        }).then(res => {
            setLoading(false)
            setItem(res.filter(item => item.id === parseInt(id)))
        }).catch(err => {
            console.log("erorr:"+err)
        }).finally(() => {
            console.log("Finalizo el pedido")
        })
}, [id])
    if (loading) {
        return (
            <>
                <ItemDetail item={item} />
            </>
        )
    } else {
        return (
            <>
                <ItemDetail item={item} />
            </>
        )
    }   
}

export default ItemDetailContainer
