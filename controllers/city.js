import city from "../models/city.js"

// שליפה כל הערים
export const getAll = (req, res) => {
    // find - שליפה של הכל
    // מחזירה מערך של כל האובייקטים באוסף
    city.find()
        // בעת הצלחה
        // הפרמטר שמתקבל בפונקציה הפנימית זה הנתונים שחזרו מהמסד
        .then(list => {
            res.status(200).send(list)
        })
        // בעת כשלון
        // הפרמטר שמתקבל בפונקציה הפנימית זה אובייקט שמכיל נתונים על השגיאה
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}

//יצירת עיר חדשה
export const create = (req, res) => {

    const newCity = new city(req.body)
    console.log(newCity);

    newCity.save()
        .then(c => {
            res.status(200).send({ message: `create city ${c._id} succeed!` })
        })
        .catch(err => {
            res.status(400).send({ error: err.message })
        })
}