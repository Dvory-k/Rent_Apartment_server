import Advertiser from "../models/advertiser.js";
import apartment from "../models/apartment.js";
import Category from "../models/category.js";
import City from "../models/city.js";

//שליפת כל הדירות
export const getAll = (req, res) => {
    // find - שליפה של הכל
    // מחזירה מערך של כל האובייקטים באוסף
    apartment.find().populate('category1').populate('city').populate('advertiser')
        // בעת הצלחה
        // הפרמטר שמתקבל בפונקציה הפנימית זה הנתונים שחזרו מהמסד
        .then(list => {
            res.status(200).send( list )
        })
        // בעת כשלון
        // הפרמטר שמתקבל בפונקציה הפנימית זה אובייקט שמכיל נתונים על השגיאה
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}

//שליפת דירה לפי ID
export const getById = (req, res) => {

    
    apartment.findById(req.params.id).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}

//שליפת דירה לפי מספר מיטות
export const getByNumBeds = (req, res) => {
    if(req.params.num==0)
    apartment.find()
        .where({ bed: { $eq: req.params.bed } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

        else if(req.params.num>0)
        apartment.find()
        .where({ bed: { $gt: req.params.bed } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

        else

        apartment.find()
        .where({ bed: { $lte: req.params.bed-1 } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

}

//שליפת דירה לפי מחיר
export const getByPrice = (req, res) => {
   
        if(req.params.num==0)
    apartment.find()
        .where({ price: { $eq: req.params.price } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

        else if(req.params.num>0)
        apartment.find()
        .where({ price: { $gt: req.params.price } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

        else

        apartment.find()
        .where({ price: { $lte: req.params.price-1 } }).populate('category1').populate('city').populate('advertiser')
        .then(a => {
            res.status(200).send(a)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })

}

//שליפת דירה לפי קוד קטגוריה
export const getApartmentByCategory = (req, res) => {
    apartment.find()
        .where({ category1: { $eq: req.params.id } }).populate('category1').populate('city').populate('advertiser')
        .then(adver => {
            res.status(200).send(adver)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}

//שליפת דירה לפי קוד עיר
export const getApartmentByCity = (req, res) => {
    apartment.find()
        .where({ city: { $eq: req.params.id } }).populate('category1').populate('city').populate('advertiser')
        .then(adver => {
            res.status(200).send(adver)
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}

//שליפת דירה לפי קוד מפרסם
export const getByAdvertiser = (req, res) => {
    apartment.find().populate('category1').populate('city').populate('advertiser')
        .populate('advertiser').where({ advertiser: { $eq: req.params.id } })
        .then(adver => {
            res.status(200).send(adver)
        })
        .catch(err => {
            res.status(500).send(err)
        })
}

//הוספת דירה חדשה
export const create = (req, res) => {
   
const image1=req.file? `/uploads/${req.file.filename}`:null
    const { apartmentName, description, category1, city, address, bed, more, price, advertiser } = req.body
    // יצירת מאמר חדש
    const newApart = new apartment({
        apartmentName, description, image:image1, category1, city, address, bed, more, price, advertiser
    })
console.log(newApart);
    newApart.save()
        // רק אחרי שהוספנו את הכתבה - 
        // נוכל לעדכן את המערך של הכתבות בקטגוריה -
        // הוספה של איבר חדש - קוד כתבה
        .then(async apart => {
            let x = await Category.findByIdAndUpdate(apart.category1, { $push: { arrApartments: apart._id } })
            if (!x) {
                return res.status(501).send({ message: `create apart ${apart._id} succeed! update category failed!` })
            }
            let y = await City.findByIdAndUpdate(apart.city, { $push: { arrApartments: apart._id } })
            if (!y) {
                return res.status(501).send({ message: `create apart ${apart._id} succeed! update city failed!` })
            }
            let z = await Advertiser.findByIdAndUpdate(apart.advertiser, { $push: { arrApartments: apart._id } })
            if (!z) {
                return res.status(501).send({ message: `create apart ${apart._id} succeed! update advertiser failed!` })
            }
            return res.status(200).send({ message: `create apart ${apart._id} succeed!` })
        })
        .catch(err => {
            return res.status(500).send({ error: err.message })
        })

}

//בדיקת תקינות למחיקת דירה
export const remove1=(req,res,next)=>{
    const { id,idAdver } = req.params
    apartment.findById(id)
          .then(list => {
             
              if (list.advertiser != idAdver )
                  return res.status(400).send({ message: "you can update only your apartments!⚠️" })
                  else
                  next()

          }
          ).catch(err=>{
            next()
            // return res.status(400).send({ err: err.message})

          })
      
         
}

//מחיקת דירה
export const remove = (req, res) => {

    // 1. חיפוש האובייקט הרצוי
  return   apartment.findByIdAndDelete(req.params.id)
        .then(async apart => {
            if (!apart) {
                return res.status(404).send({ error: `דירה לא קיימת` })
            }
            let x = await Category.findByIdAndUpdate(apart.category1, { $pull: { arrApartments: apart._id } })
            if (!x) {
                return res.status(500).send({ message: `delete apart ${apart._id} succeed! update category failed!` })
            }
            let y = await City.findByIdAndUpdate(apart.city, { $pull: { arrApartments: apart._id } })
            if (!y) {
                return res.status(500).send({ message: `delete apart ${apart._id} succeed! update city failed!` })
            }
            let z = await Advertiser.findByIdAndUpdate(apart.advertiser, { $pull: { arrApartments: apart._id } })
            if (!z) {
                return res.status(500).send({ message: `delete apart ${apart._id} succeed! update advertiser failed!` })
            }
         return   res.status(200).send({ message: `מחיקת הדירה ${apart._id} הצליחה!` })
        })
        .catch(err => {
            return res.status(500).send({ error: err.message })
        })
}

//בדיקת תקינות לעדכון דירה
export const update1=(req,res,next)=>{
    const { _id, advertiser } = req.body
    if (!_id ) {
                return res.status(400).send({ error: "חובה להכניס קוד דירה" })
            }
            if(advertiser)
            apartment.findById(_id)
            .then(a=>{
                if(a.advertiser!=advertiser)
                   return res.status(400).send({ message: "אתה יכול לעדכן את הדירות שלך בלבד⚠️" })

            })
            .catch(err=>{
                return res.status(400).send(err.message)
              }  )

              next()
}
//עדכון דירה
export const update = (req, res) => {
   
    const { _id } = req.body

   
    // console.log(_id)
    // id - איזה כתבה לעדכן - מחפש לפי קוד
    // req.body - איזה נתונים לשנות - הערכים החדשים
    // patch - לא חייבים לשלוח את כל הנתונים - יעדכן רק את השדות שנשלחו
    // אובייקט אפשרויות
    // { new: true } -  מחזיר את האובייקט אחרי השינוי
    const image1=req.file? `/uploads/${req.file.filename}`:null
    const { apartmentName, description, category1, city, address, bed, more, price, advertiser } = req.body
    const newApart = new apartment({
      _id,  apartmentName, description, image:image1, category1, city, address, bed, more, price, advertiser
    })
    return apartment.findByIdAndUpdate(_id,newApart)
        // האובייקט שנשלח כתשובה - לפני השינוי
        .then(apart => {
            // העדכון הצליח
            // בדיקה האם עדכנו את הקטגוריה - האם היא נשלחה בגוף הבקשה
            // מחיקת קוד הכתבה מהקטגוריה הישנה
            // הוספת קוד הכתבה לקטגוריה החדשה
            const { category1 } = req.body
            const { city } = req.body
            const { advertiser } = req.body
            if (category1) {
                // article.category - החזרנו את האובייקט לפני שהשינוי- הקטגוריה הישנה
                let x = Category.findByIdAndUpdate(apart.category1, { $pull: { arrApartments: _id } })
                    .then(suc => {
                        console.log("suc",suc);
                        // console.log("succ")

                    }
                    ).catch(err => {
                        // console.log("fail"),
                        console.log("err",err);
                    }
                    )
                // category - נשלח בגוף הבקשה - חדשה
                let y = Category.findByIdAndUpdate(category1, { $push: { arrApartments: _id } })
                    .then(x => {
                        console.log("success",x);
                    }
                    ).catch(err => { console.log("err", err); })
                if (!x || !y) {
                    return res.status(200).send({ message: `update apartment ${_id} succeed!, upadte categories failed!` })
                }
            }
            if (city) {
                let x1 = City.findByIdAndUpdate(apart.city, { $pull: { arrApartments: _id } }).then(suc => {
                    // console.log(suc);
                    // console.log(apart.city,id)

                }
                ).catch(err => {
                    // console.log("fail"),
                    // console.log(err);
                }
                )
                // category - נשלח בגוף הבקשה - חדשה
                let y1 = City.findByIdAndUpdate(city, { $push: { arrApartments: _id } })
                    .then(suc => {
                        // console.log(city,id);
                        // console.log("succaaaaaa")

                    }
                    ).catch(err => {
                        // console.log("fail"),
                        // console.log(err);
                    }
                    )
                if (!x1 || !y1) {
                    return res.status(200).send({ message: `update apartment ${_id} succeed!, upadte city failed!` })
                }
            }
            if (advertiser) {
                let x2 = Advertiser.findByIdAndUpdate(apart.advertiser, { $pull: { arrApartments: _id } })
                    .then(suc => { })
                    .catch(err => { })
                // category - נשלח בגוף הבקשה - חדשה
                let y2 = Advertiser.findByIdAndUpdate(advertiser, { $push: { arrApartments: _id } })
                    .then(suc => { })
                    .catch(err => { })
                if (!x2 || !y2) {
                    return res.status(200).send({ message: `update apartment ${_id} succeed!, upadte advertiser failed!` })
                }
            }
            return res.status(200).send({ message: `update apartment ${_id} succeed!` })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })


    // apartment.updateOne(req.body)

}

// export const update = (req, res) => {

//     // לא ניתן לעדכן את קוד הכתבה
//     const { _id } = req.body

//     if (_id) {
//         return res.status(403).send({ error: `update id is forbidden!` })
//     }

//     const { id } = req.params
//     // id - איזה כתבה לעדכן - מחפש לפי קוד
//     // req.body - איזה נתונים לשנות - הערכים החדשים
//     // patch - לא חייבים לשלוח את כל הנתונים - יעדכן רק את השדות שנשלחו
//     // אובייקט אפשרויות
//     // { new: true } -  מחזיר את האובייקט אחרי השינוי
//     apartment.findByIdAndUpdate(id, req.body)
//         // האובייקט שנשלח כתשובה - לפני השינוי
//         .then(async apart => {
//             // העדכון הצליח
//             // בדיקה האם עדכנו את הקטגוריה - האם היא נשלחה בגוף הבקשה
//             // מחיקת קוד הכתבה מהקטגוריה הישנה
//             // הוספת קוד הכתבה לקטגוריה החדשה
//             const category  = req.body.categoryCode
//             const city = req.body.cityCode
//             const advertiser = req.body.advertiserCode
            
//             if (category) {
//                 // article.category - החזרנו את האובייקט לפני שהשינוי- הקטגוריה הישנה
//                 let x = await Category.findByIdAndUpdate(apart.category1, { $pull: { arrApartments: apart._id } })
//                 // category - נשלח בגוף הבקשה - חדשה
//                 let y = await Category.findByIdAndUpdate(category, { $push: { arrApartments: category } })
//                 if (!x || !y) {
//                     return res.status(200).send({ message: `update apartment ${id} succeed!, upadte categories failed!` })
//                 }
//             }
//             if (city) {
//                 let x1 = await City.findByIdAndUpdate(apart.city, { $pull: { arrApartments: apart._id } })
//                 // category - נשלח בגוף הבקשה - חדשה
//                 let y1 = await City.findByIdAndUpdate(city, { $push: { arrApartments: city } })
//                 if (!x1 || !y1) {
//                     return res.status(200).send({ message: `update apartment ${apart._id} succeed!, upadte city failed!` })
//                 }
//             }
//             if (advertiser) {
//                 let x2 = await Advertiser.findByIdAndUpdate(apart.advertiser, { $pull: { arrApartments: apart._id } })
//                 // category - נשלח בגוף הבקשה - חדשה
//                 let y2 = await Advertiser.findByIdAndUpdate(advertiser, { $push: { arrApartments: advertiser } })
//                 if (!x2 || !y2) {
//                     return res.status(200).send({ message: `update apartment ${id} succeed!, upadte advertiser failed!` })
//                 }
//             }
//             return res.status(200).send({ message: `update apartment ${apart._id} succeed!` })
//         })
//         .catch(err => {
//             res.status(500).send({ error: err.message })
//         })

//     apartment.updateOne(req.body)

// }

// // export const createapartmentwithimg=()=>{

// //     const newApartimg=new FormData(

// //     )
    
// // }