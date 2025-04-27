import { useEffect, useState } from "react"

import { ShowCity } from "./ShowCity"
import { getAllCity } from "../api"
import { Outlet, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { setApartments, setCategory } from "../state/Actions"

export const AllCities = () => {
    const nav=useNavigate()
const cityList=useSelector(s=>s.cities)
    const [list, setList] = useState()
    const dis=useDispatch()
    useEffect(() => {
        getAllCity()
            .then(result => {
                dis(setApartments(result.data))
                setList(result.data)
                // console.log(cityList);
                // alert("success!:)")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })

    }, [])

    return <>
        <h1>All Cities 🏙️</h1>
        {list && list.map(x => <ShowCity cityName={x.cityName}></ShowCity>)}
        <br></br>
            <input type="button" value="להוספת עיר" onClick={()=>nav('addcity')}></input>

        <Outlet></Outlet>
    </>
}