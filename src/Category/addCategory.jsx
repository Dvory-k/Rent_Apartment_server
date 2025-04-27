import { useSelector } from "react-redux";
import { createCategory } from "../api";
import { useNavigate } from "react-router";

export const AddCategory = () => {
const nav=useNavigate()
    const token = useSelector(s => s.my_token)
    const addCategory = (e) => {
        e.preventDefault();
        const newCategory = {

            categoryName: e.target[0].value,
            arrApartments: []

        }
        createCategory(newCategory, token)
            .then(success => { alert(`category ${newCategory.categoryName} added`) 
        nav('/categories')}
            )
            .catch(err => {
                alert(err)
                console.log(err);
            })
    }

    return <>
        <h1>add category file</h1>
        <form onSubmit={(e) => addCategory(e)}>
            <label htmlFor="nameC">📰enter category name:</label>
            <br></br>
            <input id="nameC" type="text" placeholder="category"></input>
            <br></br>
            <input type="submit" value="add" />
        </form>
    </>
}