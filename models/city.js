import { Schema } from "mongoose";
import mongoose from "mongoose";
import apartment from "./apartment.js";

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
    },
    arrApartments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Apartment'
    }]


})
export default mongoose.model('City', citySchema)