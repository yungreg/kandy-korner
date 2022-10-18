import { NavBar } from "../nav/NavBar"
import { Outlet, Route, Routes } from "react-router-dom"
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
			</Route>
		</Routes>
	)
}


