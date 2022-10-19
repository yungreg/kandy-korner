/*
todo: create/export a component to handle a form field. 
*todo: create initial state inside use state fn()
TODO: make fetch post that will post to the database 
todo: import and refactor the fieldset from Honey Rae
todo:  ensure employee only access
?will this require a new route?
*/


//^refactor the below:
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const employeeNewProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [newProduct, setNewProduct] = useState({
        id: 0,
        productTypeId: 3,
        name: "name",
        pricePerUnit: 0.1
        //!maybe make this placeholder the expasnded version? tyo correspond with ln77?
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect the user to the product list
    */

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API


        // TODO: refactor this to perform the fetch() to POST the object to the API

        useEffect(
            () => {
                fetch(`http://localhost:8088/products?_expand=productType`)
                .then(response => response.json())
                .then((product) => {
                    setNewProduct(product)
                })
            },
            [] // When this array is empty, you are observing initial component state
        )
    }

    return (
        <form className="productForm">
            <h2 className="productForm__title">New Product!</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What's this product called?"
                        value={newProduct.name}
                        onChange={} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productType">Product Type:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What's this Product's type?"
                        value={newProduct.productType?.}
                        onChange={} />
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit New Product!
            </button>
        </form>
    )
} 