'use strict'
const mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ExpectativesSchema = new Schema({
    HearAboutWay: {
        type: String,
        required: true
    },
    WhatYouKnow: {
        type: String,
        required: true
    },
    EntryReason: {
        type: String,
        required: true
    },
    PersonID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
        required: false
    }
})
module.exports  = mongoose.model('expectatives', ExpectativesSchema)