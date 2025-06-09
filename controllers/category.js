import category from "../models/category.js";

//שליפת כל הקטגוריות
export const getAll = (req, res) => {
    // find - שליפה של הכל
    // מחזירה מערך של כל האובייקטים באוסף
    category.find()
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

//יצירת קטגוריה חדשה
export const create = (req, res) => {

    const newCategory = new category(req.body)

    newCategory.save()
        .then(c => {
            res.status(200).send({ message: `create category ${c._id} succeed!` })
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send({ error: err.message })
        })
}
