import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory, getProducts } from "./products"

const ItemListContainer = () => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()
    console.log("categoria:"+category)

    useEffect(() => {
        if(category === undefined){
            getProducts()
            .then(listProduct => {
                setListProduct(listProduct)
                setLoading(false)
                console.log(listProduct)
            }).catch(error => {
                console.log(error)
            }
            )
        }else{
            getProductsByCategory(category)
            .then(listProduct => {
                setListProduct(listProduct)
                setLoading(false)
                console.log(listProduct)
            }).catch(error => {
                console.log(error)
            })
        }

}, [category])
    
    if (loading) {
        return (
            <>
                <p>Cargando...</p>
                
            </>
        )
    } else {
        return (
            <>
             <div className="album py-5 bg-light">
                <div className="">
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-3"></div>
                    <ItemList productos={listProduct} />
                </div>
            </div>
            </>
        )
    }
}
export default ItemListContainer
