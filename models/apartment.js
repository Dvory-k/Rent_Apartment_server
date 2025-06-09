import { Schema } from "mongoose";
import mongoose from "mongoose";
import category from "./category.js";
import city from "./city.js";
import advertiser from "./advertiser.js";

const apartmentSchema = new mongoose.Schema({
    apartmentName: {
        type: String,
        required: true,
        minLength:2,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    apartmentName: {
        type: String,
        required: true,
        minLength:2,
    },
    category1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    address: {
        type: String,
        required: true,
        minLength:2,
    },
    bed: {
        type: Number,
        required: true,
        min:1,
    },
    more: [{
        type: String
    }],
    price: {
        type: Number,
        required: true,
        min:1
    },
    advertiser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Advertiser',
        required: true
    }


})
export default mongoose.model('Apartment', apartmentSchema)