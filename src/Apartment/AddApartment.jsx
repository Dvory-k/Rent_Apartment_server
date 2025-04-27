import { useDispatch, useSelector } from "react-redux"
import { createApartment, getAllApartments, getAllCategory, getAllCity } from "../api"
import { addApartment, setApartments, setCategory, setCity } from "../state/Actions"
import { useEffect, useState } from "react"
import swal from "sweetalert"
import { useNavigate } from "react-router"

export const AddApartment = () => {

    const apartList = useSelector(s => s.apartments)
    const cityList = useSelector(s => s.cities)
    const categoryList = useSelector(s => s.categories)
    const currentAdvertiser = useSelector(s => s.currentAdvertiser)
    const token = useSelector(s => s.my_token)
    const [image1, setImage1] = useState()
    const dis = useDispatch()
const nav=useNavigate()
    const addimg = (e) => {
        e.preventDefault();
        let category = categoryList.find(x => x.categoryName == e.target[2].value)._id
        let city = cityList.find(x => x.cityName == e.target[3].value)._id
        let formdata = new FormData()
        formdata.append("apartmentName", e.target[0].value)
        formdata.append("description", e.target[1].value)
        formdata.append("category1", category)
        formdata.append("city", city)
        formdata.append("address", e.target[4].value)
        formdata.append("bed", e.target[5].value)
        formdata.append("price", e.target[6].value)
        formdata.append("more", e.target[7].value)
        formdata.append("image", image1)
        formdata.append("advertiser", currentAdvertiser._id)
        console.log("formdata", formdata);
        createApartment(formdata, token, currentAdvertiser._id)
            .then(x => {
                dis(addApartment(formdata))
                swal(e.target[0].value,"הדירה נוספה בהצלחה","success")
                // alert(formdata.apartmentName + "נוספה בהצלחה")
                nav('/allapartments')
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            })

    }

    const add = (e) => {
        e.preventDefault();
        let category = categoryList.find(x => x.categoryName == e.target[2].value)._id
        let city = cityList.find(x => x.cityName == e.target[3].value)._id
        const newApart = {
            apartmentName: e.target[0].value,
            description: e.target[1].value,
            category1: category,
            city: city,
            address: e.target[4].value,
            bed: e.target[5].value,
            price: e.target[6].value,
            more: [e.target[7].value],
            image: e.target[8].value,
            advertiser: currentAdvertiser._id
        }
        console.log("newapartment", newApart);
        createApartment(newApart, token, currentAdvertiser._id)
            .then(x => {
                dis(addApartment(newApart))
                alert(newApart.apartmentName + "נוספה בהצלחה")
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            })

    }
    useEffect(() => {
        getAllApartments()
            .then(x => {
                dis(setApartments(x.data))
                return null
            })
            .catch(err => {
                console.log(err)
                return null
            })

        getAllCity()
            .then(x => {
                dis(setCity(x.data))
                return null
            })
            .catch(err => {
                console.log(err)
                return null
            })

        getAllCategory()
            .then(x => {
                dis(setCategory(x.data))
                return null
            })
            .catch(err => {
                console.log(err)
                return null
            })
    }, [])

    const fileChange = (e) => {
        setImage1(e.target.files[0])
    }

    return <>
        <h1>Add Apartment</h1>
        <form onSubmit={(e) => addimg(e)}>
            <label htmlFor="nameA">Enter Apartment Name:</label>
            <br></br>
            <input id="nameA" type="text" placeholder="apartment name"></input>
            <br></br>

            <label htmlFor="description">Enter Apartment description:</label>
            <br></br>
            <input id="description" type="text" placeholder="description"></input>
            <br></br>

            <label htmlFor="category">select category:</label>
            <br></br>
            <select id="category">
                {categoryList && categoryList.map((l) => (
                    <option key={l.categoryName}>{l.categoryName}</option>
                ))}
            </select>
            <br></br>

            <label htmlFor="city">select city:</label>
            <br></br>
            <select id="city">
                {cityList && cityList.map((l) => (
                    <option key={l.cityName}>{l.cityName}</option>
                ))}
            </select>
            <br></br>

            <label htmlFor="address">Enter Apartment address:</label>
            <br></br>
            <input id="address" type="text" placeholder="apartment address"></input>
            <br></br>
            <label htmlFor="numBeds">Enter num of beds:</label>
            <br></br>


            <input id="numBeds" type="number" placeholder="numBeds"></input>
            <br></br>
            <label htmlFor="price">Enter price:</label>
            <br></br>

            <input id="price" type="number" placeholder="price"></input>
            <br></br>
            <label htmlFor="more">Enter more things:</label>

            <br></br>
            <input id="more" type="text" placeholder="more..."></input>
            <br></br>

            <label htmlFor="image">Enter Apartment image:</label>
            <br></br>
            <input id="image" type="file" placeholder="apartment image" onChange={(e) => fileChange(e)}></input>
            <br></br>


            <input type="submit" value="add" />
        </form>
    </>
}