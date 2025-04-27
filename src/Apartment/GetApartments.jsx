import { useEffect, useState } from "react"
import { getAllApartments, getAllCategory, getAllCity, getApartmentByAdvertiser, getApartmentByBeds, getApartmentByCategory, getApartmentByCity, getApartmentById, getApartmentByPrice } from "../api"
import { ShowApartment } from "./ShowApartment"
import { useDispatch, useSelector } from "react-redux"
import { setApartments, setCategory, setCity } from "../state/Actions"


export const GetApartments = () => {

  const apartList = useSelector(s => s.apartments)
  const cityList = useSelector(s => s.cities)
  const catList = useSelector(s => s.categories)
  const currentAdver = useSelector(s => s.currentAdvertiser)
  const token = useSelector(s => s.my_token)
  const [list, setList] = useState()
  const [type, setType] = useState()
  const [type1, setType1] = useState()
  const [type2, setType2] = useState()
  const [type3, setType3] = useState()
  const [type4, setType4] = useState()
  const dis = useDispatch()



  useEffect(() => {
    getAllApartments()
      .then(x => {
        dis(setApartments(x.data))
        setList(x.data)
        console.log(x.data)
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
      })
      .catch(err => {
          console.log(err);
      })
  }, [])

  const getAll = () => {
    getAllApartments()
      .then(x => {

        setList(x.data)
        return null
      })
      .catch(err => {
        console.log(err)
        return null
      })
  }
  const getbyId = (e) => {
    e.preventDefault();
    getApartmentById(e.target.value)
      .then(x => {
        setList(x.data)

      })
      .catch(err => {
        console.log(err)
      })
  }
  const getbyCity = (e) => {
    e.preventDefault();
    console.log("event", e.target.value);
    getApartmentByCity(e.target.value)
      .then(x => {
        setList(x.data)

      })
      .catch(err => {
        console.log(err)
      })
  }
  const getbyAdvertiser = (id) => {

    getApartmentByAdvertiser(id, token)
    .then(x => {
        setList(x.data)
        console.log(list);
    })
    .catch(err => {
        console.log(err)
    })

  }
  const getbyNumBeds = () => {
    if (!type1)
      setType1("שווה ל")
    let x = 0
    type1 == "קטו מ" ? x = -1 : type1 == "גדול מ" ? x = 1 : x = 0
    console.log("type1\n", type1, "\ntype2\n", type2, "\nx\n", x);
    getApartmentByBeds(type2, x)
      .then(x => {
        setList(x.data)

      })
      .catch(err => {
        console.log(err)
      })
  }

  const getbyPrice = () => {
    if (!type1)
      setType3("שווה ל")
    let x = 0
    type3== "קטו מ" ? x = -1 : type3 == "גדול מ" ? x = 1 : x = 0
    console.log("type3\n", type3, "\ntype4\n", type4, "\nx\n", x);
    getApartmentByPrice(type4, x)
      .then(x => {
        setList(x.data)

      })
      .catch(err => {
        console.log(err)
      })
  }

  const GetByCategory = (e) => {
    console.log(e);
    e.preventDefault()
    // const category = catList.find(x => x.categoryName == e.target.value)._id
    // console.log(category);
    getApartmentByCategory(e.target.value)
        .then(x => {
            setList(x.data)
            console.log(list);
        })
        .catch(err => {
            console.log(err);
        })
}
  return <>
          <div class="filter-section">
    <h1>filters🔍🔎</h1>
    <select onChange={e => setType(e.target.value)}>
    <option selected>select type of filtering</option>
      <option >select all</option>
      {/* <option>select by id</option> */}
      <option>select by city</option>
      <option>select by category</option>
      {/* <option>select by advertiser</option> */}
      <option>select by number of beds</option>
      <option>select by price</option>
    </select>

    {type == "select all" && setList(apartList)}
    {type == "select all" && setType("")}
   

    {/* עובד רק בשלב שאח"כ*/}
    {type == "select by number of beds"
      && <input type="number" placeholder="הכנס את מספר המיטות הרצוי" onInput={(e) => { setType2(e.target.value); getbyNumBeds() }}></input>}
    {type == "select by number of beds" && <select onChange={(e) => { setType1(e.target.value); getbyNumBeds() }}>
      <option selected>בחר סוג</option>
      <option >שווה ל</option>
      <option>גדול מ</option>
      <option>קטו מ</option>
    </select>}
    {type == "select by city" && <select onChange={(e) => getbyCity(e)}>
      <option selected>בחר את העיר הרצויה מתוך הרשימה</option>
      {cityList && cityList.map((c) => (
        <option value={c._id}>{c.cityName}</option>
      ))}
    </select>}
    {type == "select by advertiser" && <input type="button" value="לא זמין כרגע, נסו מאוחר יותר‼" onClick={(e) => getbyAdvertiser(e)}></input>}

    {type == "select by price"
      && <input type="number" placeholder="הכנס את המחיר הרצוי" onInput={(e) => { setType4(e.target.value); getbyPrice() }}></input>}
    {type == "select by price" && <select onChange={(e) => { setType3(e.target.value);console.log(e.target.value); getbyPrice() }}>
      <option selected>בחר סוג</option>
      <option>שווה ל</option>
      <option>גדול מ</option>
      <option>קטו מ</option>
    </select>}

    {type == "select by category" && <select onChange={(e) => GetByCategory(e)}>
            <option defaultValue>choose the category that you want from the list</option>
            {catList && catList.map((c) => (
                <option value={c._id}>{c.categoryName}</option>
            ))}
        </select>}
        <br></br>
        {currentAdver._id && <input type="button" value="your apartments" onClick={() => getbyAdvertiser(currentAdver._id)}></input>}

</div>
<br></br>

    {list && list.map(x => <ShowApartment apartment={x} key={x._id}></ShowApartment>)}
  </>
}