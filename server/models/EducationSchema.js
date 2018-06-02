'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    },
    PersonID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
        required: false
    }
})
module.exports  = mongoose.model('education', EducationSchema)