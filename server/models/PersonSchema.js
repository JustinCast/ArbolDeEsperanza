
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    Name: {
        type: String,
        default: '',
        required: true
    },
    LastName: {
        type: String,
        default: '',
        required: true
    },
    ActiveOrInactive: {
        type: Boolean,
        default: false,
        required: true
    },
    EntryDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    BornDate: {
        type: Date,
        required: true
    },
    Age: {
        type: Number,
        max: 100,
        min: 5,
        required: true
    },
    PhoneNumber: {
        type: String,
        default: '8888-8888',
        required: true
    },
    Email: {
        type: String,
        default: 'mail@mail.com',
        required: true
    },
    EmergencyContact: {
        type: String,
        required: true
    },
    EmergencyContactData: {
        FullName: {
            type: String,
            required: true1
        },
        Relationship: {
            type: String,
            required: true
        }
    },
    Reference: {
        type: String,
        required: true
    },
    DNI: {
        type: String,
        required: true
    },
    Documented: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    MaritalStatus: {
        type: String,
        default: '',
        required: true
    },
    Residence: {
        type: String,
        required: true
    },
    Expectatives: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expectatives'
    },
    Education: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'education'
    },
    SocioEconomic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socioeconomic'
    },
    Employnment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employnment'
    },
    Health: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'health'
    }
})
module.exports  = mongoose.model('person', PersonSchema)