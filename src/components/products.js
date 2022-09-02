export const products=[
    {
        id: 1,
        category: "ruta",
        nombre: "Bici de Ruta",
        descripcion: "Bici de paseo con sillin",
        precio: 2500,
        imagen: "/bici1.jpg"
    },
    {
        id: 2,
        category: "paseo",
        nombre: "Bici de paseo",
        descripcion: "Bici de paseo con sillin",
        precio: 1500,
        imagen: "/bici2.jpg"
    }
]

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        resolve(products.find(prod => prod.id == id))
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        resolve(products.filter(prod => prod.category == category))
    })
}
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}