import { useDispatch, useSelector } from "react-redux";
import { createCity, getAllCity } from "../api";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { useEffect } from "react";
import { setApartments } from "../state/Actions";

export const AddCity = () => {
const nav=useNavigate()

const cityList=useSelector(s=>s.cities)
    const token = useSelector(s => s.my_token)
    const dis=useDispatch()
    const add = (e) => {
        e.preventDefault();
        const newCity = {
            cityName: e.target[0].value,
            // arrApartments: []
        }
        let city1=cityList.filter(f=>f.cityName==newCity.cityName)
        console.log("c1",city1,cityList);
        if(city1 && city1.length>0)
        swal(newCity.cityName,"שם העיר כבר קיים במערכת. לא ניתן להכניס עיר פעמיים","error")
        else
        createCity(newCity, token)
            .then(success => {
         
    swal(newCity.cityName,"נוספה בהצלחה","success")
                 nav('/cities')  
            })
            .catch(err => {
                alert(err)
                console.log(err);
            })
        
    }

    useEffect(() => {
        getAllCity()
            .then(result => {
                dis(setApartments(result.data))
                // setList(result.data)
                // console.log(cityList);
                // alert("success!:)")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })

    }, [])

    return <>
        <h1>Add City File</h1>
        <form onSubmit={(e) => add(e)}>
            <label htmlFor="nameC">📰Enter City Name:</label>
            <br></br>
            <input id="nameC" type="text" placeholder="city"></input>
            <br></br>
            <input type="submit" value="add" />
        </form>
    </>
}