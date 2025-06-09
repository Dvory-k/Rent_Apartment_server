import { Schema } from "mongoose";
import mongoose from "mongoose";
import apartment from "./apartment.js";
const advertiserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        maxLength: 8,
        minLength: 5,
        required:true
    },
    phone:{
        type:String,
        maxLength:10,
        minLength:9,
        required:true
    },
    phone2:{
        type:String,
        maxLength:10,
        minLength:9,
    },
    arrApartments:[{
        type:mongoose.Types.ObjectId,
        ref:'Apartment'
      }]

})
 export default mongoose.model('Advertiser', advertiserSchema)

// // article - כתבה
// // כותרת, תיאור, תוכן

// // import { Schema } from "mongoose";
// import mongoose from "mongoose";

// // code first - קוד של מחלקות בשרת ואחכ יצירת מסד נתונים
// // db first - מסד נתונים ואחכ יצירת מחלקות בשרת

// // הגדרת מודל - סכמה
// // הגדרה של איך יראה כל אובייקט באוסף

// // mongoose - ספריה של עריכת נתונים ותשאול אובייקטים של מונגו
// // npm i mongoose

// // const articleSchema = new Schema({
// const usersSchema = new mongoose.Schema({
//     // סכמה מגדירה איך נראה אובייקט בודד באוסף
//     // אובייקט ג'סון

//     // השדה נוצר אוטומטית עם כל יצירת אובייקט במונגו
//     // hashcode כיון שמונגו מבוסס על מסמכים והשליפה באמצעות
//     // לא ניתן לבטל את הקו התחתי 
//     // בסמד נתונים בכל מקרה יהיה שמור התחתי
//     // יש פקודה מסוימת שיכולה לבטת אותו בשרת
//     // אבל חייבים לזכור שבכל גישה למסד יש להשתמש בקו התחתי
//     // _id: mongoose.Schema.Types.ObjectId,
//     // אין עניין לכתוב
//     // אפשר, אבל אם כתבנו - ביצירת אובייקט חדש נצטרך ליצור לו קוד בצורה ידנית

//     // הגדרות אילוצים על השדות
//     // חובה, ביטוי רגולרי, אורך, מפתח זר
//     username: {
//         type: String,
//         // חובה - not null
//         require: true,
//         maxLength: 50
//     },

//     password: Number,
//     email:String

  

//     // השדה ג"כ נוצר אוטומטית
//     // מסמל שהאובייקט נוצר דרך מונגוס
//     // __v: 0
// })

// // ייצוא כמודל - האוסף
// // מקבלת שם למודל בתוך מחרוזת וגם את הסכמה שמגדירה את האיברים במודל
// // בפרויקט נכיר את המודל לפי השם שניתן לו כאן
// // וגם במונגו זה יהיה השם של האוסף
// export default mongoose.model('Users', usersSchema)
// // מקביל לטבלה במסד הנתונים