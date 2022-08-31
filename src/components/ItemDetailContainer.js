import React from 'react'
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"

function ItemDetailContainer () {
    const [item, setItem] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        
        const productosCollection = collection(db, "products") // refecencia a la coleccion de productos
        const referencia = doc(productosCollection, id)  //referencia a un documento
        const consulta = getDoc(productosCollection, id) //promesa

        consulta
            .then((res)=>{
                console.log(res.id)
                console.log(res.data())
                setItem(res.data())
            })
            .catch((err)=>{
                console.log(err)
            })
}, [id])
   
    return (
        <>
            <ItemDetail item={item} />
        </>
    ) 
}

export default ItemDetailContainer
