
import { Provider } from "react-redux"
import { Login } from "../Advertiser/LoginFile"
import myStore from "../state/Store"
import { SignIn } from "../Advertiser/SignIn"
import { AddCategory } from "../Category/addCategory"
import { AllCategories } from "../Category/AllCategories"
import { GetApartments } from "../Apartment/GetApartments"
import {AddCity} from "../City/AddCity"
import { AllCities } from "../City/AllCities"
import { AddApartment } from "../Apartment/AddApartment"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "../routing/Nav"
import { Routing } from "../routing/Routing"
export const Main=()=>{

    return<>
    <Provider store={myStore}>
    <BrowserRouter>
    
    <Nav></Nav>
    <Routing></Routing>
    </BrowserRouter>
{/* 
    <Login></Login>
    <SignIn></SignIn>
    <AddCategory></AddCategory>
 
    <AllCategories></AllCategories>
    <GetApartments></GetApartments>
    <AddCity></AddCity>
    <AllCities></AllCities>
    <AddApartment></AddApartment> */}
    </Provider>
    </>
}