import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllApartments, getAllCategory, getAllCity, getApartmentById, updateApartment } from "../api"
import { setApartments, setCategory, setCity, setCurrentApartment } from "../state/Actions"
import { useNavigate, useParams } from "react-router"
import swal from "sweetalert"

export const UpdateApart = () => {

    const apartList = useSelector(s => s.apartments)

    const cityList = useSelector(s => s.cities)
    const categoryList = useSelector(s => s.categories)
    const currentAdvertiser = useSelector(s => s.currentAdvertiser)
    const currentApartment = useSelector(s => s.currentApartment)
    const token = useSelector(s => s.my_token)
    const params = useParams()
    const { index } = params
    const [apartment, setApartment] = useState()
    const [image1, setImage1] = useState()
    const nav = useNavigate()
    const dis = useDispatch()


    const upAp1 = (e) => {
        e.preventDefault();
        console.log("kkkkkkkk", e.target[8].value)
        let category = categoryList.find(x => x.categoryName == e.target[2].value)._id
        let city = cityList.find(x => x.cityName == e.target[3].value)._id
        let formdata = new FormData()
        formdata.append("_id", currentApartment._id)
        formdata.append("apartmentName", e.target[0].value)
        formdata.append("description", e.target[1].value)
        formdata.append("category1", category)
        formdata.append("city", city)
        formdata.append("address", e.target[4].value)
        formdata.append("bed", e.target[5].value)
        formdata.append("price", e.target[6].value)
        formdata.append("more", e.target[7].value.split(","))
        if (image1)
            formdata.append("image", image1)
        formdata.append("advertiser", currentAdvertiser._id)
        updateApartment(currentAdvertiser._id, formdata, token)
            .then(succ => {
                swal("הדירה "+e.target[0].value, "עודכנה בהצלחה", "success")
                nav('/allApartments')
            })
            .catch(err => {
                swal("שגיאה ", err.response.data.message, "error")
                // alert(err.message)
                console.log(err);
            })
    }


    const upAp = (e) => {
        e.preventDefault();
        let category = categoryList.find(x => x.categoryName == e.target[2].value)._id
        let city = cityList.find(x => x.cityName == e.target[3].value)._id
        const newApart = {
            _id: currentApartment._id,
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
        updateApartment(currentAdvertiser._id, newApart, token)
            // createApartment(newApart,token,currentAdvertiser._id)
            .then(x => {
                // dis(addApartment(newApart))
                alert(newApart.apartmentName + "עודכנה בהצלחה")
                nav('/allApartments')
            })
            .catch(err => {
                console.log(err)
                alert(err.message)
            })

    }
    useEffect(() => {

        getApartmentById(index)
            .then(x => {
                dis(setCurrentApartment(x.data))
                //    setApartment(x.data)
                //    setApartment( apartment.find(x=>x._id==index))
                //    console.log("^^^^^^^^^",x.data);
                return null
            })
            .catch(err => {
                console.log(err)
                console.log("^^", err);
                return null
            })
        getAllApartments()
            .then(x => {
                dis(setApartments(x.data))

                console.log(x.data)
                return null
            })

            .catch(err => {
                console.log(err)
                return null
            })
        console.log("aaa", apartment)

        // setApartment(apartList.filter(x=>x._id==index))
        console.log("sss", apartList.filter(x => x._id == index), index, apartList)
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



    return <>
        <form onSubmit={(e) => upAp1(e)}>
            <label htmlFor="nameA">Enter Apartment Name:</label>
            <br></br>
            {<input id="nameA" type="text" defaultValue={currentApartment.apartmentName}></input>}
            <br></br>

            <label htmlFor="description">Enter Apartment description:</label>
            <br></br>
            {currentApartment && <input id="description" type="text" defaultValue={currentApartment.description}></input>}
            <br></br>

            <label htmlFor="category">select category:</label>
            <br></br>
            {currentApartment.category1 && <select id="category">
                <option>{currentApartment.category1.categoryName}</option>
                {categoryList && categoryList.map((l) => (
                    <option key={l.categoryName}>{l.categoryName}</option>
                ))}
            </select>}
            <br></br>

            <label htmlFor="city">select city:</label>
            <br></br>
            {currentApartment.city && <select id="city">
                <option selected>{currentApartment.city.cityName}</option>
                {cityList && cityList.map((l) => (
                    <option key={l.cityName}>{l.cityName}</option>
                ))}
            </select>}
            <br></br>

            <label htmlFor="address">Enter Apartment address:</label>
            <br></br>
            {currentApartment && <input id="address" type="text" defaultValue={currentApartment.address}></input>}
            <br></br>
            <label htmlFor="numBeds">Enter num of beds:</label>
            <br></br>


            {currentApartment && <input id="numBeds" type="number" defaultValue={currentApartment.bed}></input>}
            <br></br>
            <label htmlFor="price">Enter price:</label>
            <br></br>

            {currentApartment && <input id="price" type="number" defaultValue={currentApartment.price}></input>}
            <br></br>
            <label htmlFor="more">Enter more things:</label>

            <br></br>
            {currentApartment && <input id="more" type="text" defaultValue={currentApartment.more}></input>}
            <br></br>

            <label htmlFor="image">Enter Apartment image:</label>
            <br></br>
            {currentApartment && <img src={`http://localhost:3003${currentApartment.image}`}></img>}
            <br></br>
            <input type="file" onChange={(e) => setImage1(e.target.files[0])}></input>
            <br></br>

            <input type="submit" value="add" />
        </form>
    </>
}