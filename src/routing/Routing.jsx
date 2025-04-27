
// יצירת קומפוננטה שמכילה הגדרות של הניתובים

import { Route, Routes } from "react-router"
import { Login } from "../Advertiser/LoginFile"
import { GetApartments } from "../Apartment/GetApartments"
import { Home } from "../start/Home"
import { AllCities } from "../City/AllCities"
import { AllCategories } from "../Category/AllCategories"
import { UpdateApart } from "../Apartment/UpdateApartment."
import { AddApartment } from "../Apartment/AddApartment"
import { AddCity } from "../City/AddCity"
import { SignIn } from "../Advertiser/SignIn"
import { AddCategory } from "../Category/addCategory"

// טען קומפוננטה מסוימת url הצהרה עבור ניתוב מסוים 
export const Routing = () => {
    return <>
        {/* Routes - תגית שמכילה את כל ההגדרות של ניתובים */}
        <Routes>
            {/* Route - הגדרה של ניתוב בודד */}
            {/* path = url ניתוב שנכתוב ב */}
            {/* element = קומפוננטה שנטען */}
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signin" element={<SignIn></SignIn>}></Route>
            <Route path="allApartments" element={<GetApartments></GetApartments>}> </Route>
            <Route path="cities" element={<AllCities></AllCities>}>
                <Route path="addcity" element={<AddCity></AddCity>}></Route> </Route>

            <Route path="categories" element={<AllCategories></AllCategories>}>
              </Route>
              <Route path="addcategory" element={<AddCategory></AddCategory>} ></Route>

            <Route path="addApart" element={<AddApartment></AddApartment>}> </Route>
            <Route path="update/:index" element={<UpdateApart></UpdateApart>}></Route>


            {/*         
            // <Route path="details/:index" element={<Details></Details>}>
            <Route path="rent/:index" element={<Rent></Rent>}></Route>
            <Route path="update/:index" element={<UpdateCar></UpdateCar>}></Route>
            </Route>
            <Route path="return" element={<Return></Return>}>
            <Route path="pay" element={<Pay></Pay>}></Route>
            </Route>
            <Route path="allrent" element={<Allrent></Allrent>}></Route>
            <Route path="Insert" element={<Insert></Insert>}></Route>
            <Route path="AllAnaa" element={<AllAnaa></AllAnaa>}>
            <Route path="UpdateDegem1/:index" element={<UpdateDegem1></UpdateDegem1>}></Route>  
            </Route>
            <Route path="Degem" element={<Degem></Degem>}>
            <Route path="AddDegem1" element={<AddDegem1></AddDegem1>}></Route>
            </Route>
            <Route path="rent2/:number" element={<Rent2></Rent2>}></Route>
            {/* <Route path="select/:type" element={<Select></Select>}></Route> */}
            {/* <Route path="cars/:type/:type1" element={<Cars></Cars>}></Route> */}
            {/* הגדרה של ניתוב כילד */}
            {/* <Route path="details/:Rent/:index" element={<Details><Rent></Rent></Details>}></Route> */}
            {/* <Route path="details/:name/:amount" element={<Details></Details>}></Route> */}
            {/* ניתוב ברירת מחדל */}
            <Route path="" element={<Home></Home>}></Route>

        </Routes>
    </>
}