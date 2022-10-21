/*
to
*todo: import useeffect/use state
*todo: refactor to create the productList componnet to display an ul of products for //!employees only
*todo: make teh button take you to teh employeeform route
todo: why is the ewmployee form showing up on produvcts ?
todo: send that off to be used by acpplication views. 
*/


import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const ProductList = () => {
    const navigate = useNavigate()
    const [products, setProductList] = useState([])
    const [filteredProducts, setFilteredProductList] = useState([{}])
    const [topPriceList, setTopPriceList] = useState(false)

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=productType`)
            .then(response => response.json())
            .then((productObj) => {
                setProductList(productObj)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )
// todo*: filter the products by a priice per unit of over $2
    useEffect(() =>{
        if(topPriceList){
            const topPricedProducts = products.filter(product => product.pricePerUnit > 2) 
            setFilteredProductList(topPricedProducts)
        } else {
            setFilteredProductList(products)
        }
    },[topPriceList, products])

    return <>
<h2>Products List!</h2>

<button onClick={
    () => {
        setTopPriceList(true)
    }
}>Top Priced</button>

<article className="products_list">
    {
        filteredProducts.map(
            (product) => {
                return <>
                <section key={product.id} className="products_listitem">
                    <ul>
                        <li>Product Name: {product.name}</li> 
                        <li>Price Per Unit: ${product.pricePerUnit} </li>
                        <li>Product Type: {product.productType?.kandyType}</li>
                    </ul>
                   
                </section>
                </>
            }
        )
    }
</article>

//todo*: make teh route for the button cclick
<button onClick={() => navigate("/Products/EmployeeForm/EmployeeForm")}>Create New Product</button>
</>
}
