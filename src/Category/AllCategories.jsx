import { useEffect, useState } from "react"
import { getAllCategory } from "../api"
import { ShowCategory } from "./showCategory"
import { Outlet, useNavigate } from "react-router"

export const AllCategories = () => {
    const [list, setList] = useState()
    const nav=useNavigate()
    useEffect(() => {
        getAllCategory()
            .then(result => {
                setList(result.data)
                // alert("success!:)")
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })

    }, [])

    return <>
        <h1>all categories🗂️</h1>
        {list &&list.length>0&& list.map(x => <ShowCategory nameC={x.categoryName}></ShowCategory>)}
        <br></br>
        <input type="button" value="להוספת קטגוריה" onClick={()=>nav('/addcategory')}></input>
      

    </>
}