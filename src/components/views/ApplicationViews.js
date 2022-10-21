
import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNewProductForm } from "../EmployeeForm/EmployeeForm"
import { LocationsListItems } from "../Locations/LocationViews"
import { ProductList } from "../Products/ProductList"


export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1> Howdy from Kandy Korner</h1> 

					 <Outlet />
				</>
			}>
	
				<Route  path="locations" element={ <LocationsListItems /> } />
				<Route  path="products" element={ <ProductList /> } />
				<Route  path="Products/EmployeeForm/EmployeeForm" element={ <EmployeeNewProductForm /> } />
				
			</Route>
		</Routes>
	)
}


//? why is emplpoee form not connectionmg? did i routwe it wrong?