import { Schema } from "mongoose";
import mongoose from "mongoose";
import apartment from "./apartment.js";
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    arrApartments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Apartment'
    }]

})
export default mongoose.model('Category', categorySchema)