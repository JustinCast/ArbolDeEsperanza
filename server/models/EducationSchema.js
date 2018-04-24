'use strict'
import { Mongoose } from "mongoose";
const Schema = Mongoose.Schema

const EducationSchema = new Schema({
    Read: {
        type: Boolean,
        default: false,
        required: true
    },
    EducationBackground: {
        type: String,
        required: true
    },
    Courses: {
        type: Array,
        required: true
    }
})
module.exports  = mongoose.model('education', EducationSchema)