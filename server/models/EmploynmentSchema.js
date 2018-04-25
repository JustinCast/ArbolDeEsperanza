import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmploynmentSchema = new Shema({
    DoYouHaveWork: {
        type: String,
        required: true
    },
    Ocuppation: {
        type: String,
        required: false
    },
    UnemploynmentReason: {
        type: String,
        required: false
    },
    UnemploynmentDate: {
        type: Date,
        required: false
    },
    WorkFrecuency: {
        type: Number,
        required: false
    },
    WorkFewHours: {
        type: Boolean,
        required: false
    },
    WhyWorkFewHours: {
        type: String,
        required: false
    },
    WhyIsItImposible: {
        type: String,
        required: false
    },
    HaveABusiness: {
        type: Boolean,
        required: true
    },
    SellProducts: {
        type: Number,
        required:false
    },
    Clients: {
        type: Array,
        required: false
    }
})
module.exports  = mongoose.model('employnment', EmploynmentSchema)