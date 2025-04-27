import { useDispatch, useSelector } from "react-redux"
import { delApartment } from "../api"
import { deleteApartment } from "../state/Actions"
import { useNavigate } from "react-router"
import { UpdateApart } from "./UpdateApartment."
import { useState } from "react"
import '../style/showapartment.css'

export const ShowApartment = ({ apartment }) => {
   
    const nav = useNavigate()
    const currentAdvertiser = useSelector(s => s.currentAdvertiser)
    const [up, setUp] = useState()
    const token = useSelector(s => s.my_token)
    const dis = useDispatch()
    const check = () => {
        if (!currentAdvertiser)
            return false
        if (currentAdvertiser._id != apartment.advertiser._id)
            return false
        return true
    }

    const deleteApart1 = (id) => {

        // updateA=(id)=>{

        //     nav(`/update/${apartment._id}`)  
        // }

        delApartment(id, currentAdvertiser._id, token)
            .then(x => {
                alert("delete succeded")
                dis(deleteApartment(id))

            }).catch(err => {
                alert(err.message)
                console.log(err)
            })
    }
    // return <>
    //     <br></br>

    //     <h1>apartment🏡🏠🏡🏠</h1>
    //     <h4>id: {apartment._id}</h4>
    //     <h4>apartment name: ➡️ {apartment.apartmentName}</h4>
    //     <h4>category: ➡️ {apartment.category1.categoryName}</h4>
    //     <h4>city: ➡️ {apartment.city.cityName}</h4>
    //     <h4>address: ➡️ {apartment.address}</h4>
    //     <h4>number of beds: ➡️ {apartment.bed}</h4>
    //     <h4>price: ➡️ {apartment.price}</h4>
    //     <h4>advertiser: ➡️ {apartment.advertiser.email}</h4>
    //     <img src={`http://localhost:3003${apartment.image}`}></img>

    //     {check() && <input type="button" value="למחיקה" onClick={() => deleteApart1(apartment._id)} />}
    //     {check() && <input type="button" value="✍️לעדכון" onClick={() => nav(`/update/${apartment._id}`)} />}
    //     {/* {up&&<UpdateApart apartment={apartment}></UpdateApart>} */}
    // </>
  
        return (
            <div className="card apartment-card">
                <img src={`http://localhost:3003${apartment.image}`} alt={apartment.apartmentName} />
                <div className="card-content">
                    <h3 className="card-title">Apartment name:  {apartment.apartmentName}</h3>
                    <h4>description: {apartment.description}</h4>
                    <h4>Category:  {apartment.category1.categoryName}</h4>
                    <h4>City:  {apartment.city.cityName}</h4>
                    <h4>Address:  {apartment.address}</h4>
                    <h4>Number of beds:  {apartment.bed}</h4>
                    <h4>Price:  {apartment.price}</h4>
                    <h4>more: {apartment.more[0]}</h4>
                    <h4>Advertiser:  {apartment.advertiser.email}</h4>
                    {/* <img src={`http://localhost:3003${apartment.image}`}></img> */}

     {check() && <input type="button" value="למחיקה" onClick={() => deleteApart1(apartment._id)} />}
    {check() && <input type="button" value="לעדכון" onClick={() => nav(`/update/${apartment._id}`)} />}
    {up&&<UpdateApart apartment={apartment}></UpdateApart>}
                </div>
            </div>
        );
    
}