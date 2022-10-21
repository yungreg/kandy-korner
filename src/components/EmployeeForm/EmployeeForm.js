/*
*todo: create/export a component to handle a form field. 
*todo: create initial state inside use state fn()
*todo*: make the price field
*todo*: make the kandyType field 
*todo*: make the Product Name field
TODO: make fetch post that will post to the database 
todo: import and refactor the fieldset from Honey Rae
todo:  ensure employee only access
?will this require a new route?
*/


//^refactor the below:
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeNewProductForm = () => {
    const navigate = useNavigate()
        //TODO*: Add the correct default properties to the initial state object
    const [newProduct, updateNewProduct] = useState({
        productTypeId: "",
        name: "",
        pricePerUnit: 0.0,
        productType: {
            kandyType: ""
        }
        //?is this placeholder in the wrong place?
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect the user to the product list
    */

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        //console.log("buyttone hath been clicked")

        // TODO: Create the object to be saved to the API
        const dataSetForAPIOnSubmit = {
            id: kandyUserObject.id,
            productTypeId: newProduct.productTypeId,
            name: newProduct.name,
            pricePerUnit: newProduct.pricePerUnit,
            productType: {
                kandyType: newProduct.productType.kandyType
            }
        }
        // TODO: refactor this to perform the fetch() to POST the object to the API

        return fetch(`http://localhost:8088/products?_expand=productType`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataSetForAPIOnSubmit)
        })
                .then(response => response.json())
                .then(() => {
                    navigate("/products")
                })
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
                        placeholder="What's this product called? (case sensitive)"
                        value={newProduct.name}
                        onChange={
                            (event) => {
                                const copy = {...newProduct}
                                copy.name = event.target.value
                                updateNewProduct(copy)
                            }
                        } />
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
                        value={newProduct.productType.kandyType}
                        onChange={
                            (event) => {
                                const copy = {...newProduct}
                                copy.productType.kandyType = event.target.value
                                updateNewProduct(copy)
                            }
                        } />
                </div>
            </fieldset>

            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="productType">Product Price Per Unit:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How much does this Product cost (per unit)?"
                        value={newProduct.pricePerUnit}
                        onChange={
                            (event) => {
                                const copy = {...newProduct}
                                copy.pricePerUnit = event.target.value
                                updateNewProduct(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" 
            onClick = {(click) => handleSaveButtonClick(click)
            } 
            >
                Submit New Product!
            </button>
        </form>
    )
} 

//onClick={() => navigate("/products")}