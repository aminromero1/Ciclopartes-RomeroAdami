import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getProductsById} from "./products.js"

function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        getProductsById(id)
        .then(item => {
            setItem(item)
            setLoading(false)
            console.log(item)
        })
        .catch(error => {
            console.log(error)
        })
    } , [id])

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
