import { HouseMember } from './HouseMember';

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HOuseMember = require('./HouseMember')

const PersonSchema = new Schema({
    Name: {
        type: String,
        default: '',
        required: true
    },
    EntryDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    ActiveOrInactive: {
        type: Boolean,
        default: false,
        required: true
    },
    Age: {
        type: Number,
        max: 100,
        min: 5,
        required: true
    },
    BornDate: {
        type: Date,
        required: true
    },
    Read: {
        type: Boolean,
        required: true
    },
    Write: {
        type: Boolean,
        required: true
    },
    SocialSecurity: {
        type: Boolean,
        required: true
    },
    SocialSecurityType: {
        type: String,
        default: 'Común',
        required: false
    },
    Education: {
        type: String,
        default: '',
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        default: '8888-8888',
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        default: 'mail@mail.com',
        required: true
    },
    Need_Doctor: {
        type: Boolean,
        required: true
    },
    Need_Ophthalmologist: {
        type: Boolean,
        required: true
    },
    Need_Mammography: {
        type: Boolean,
        required: true
    },
    Need_Dentist: {
        type: Boolean,
        required: true
    },
    Need_Gynecologist: {
        type: Boolean,
        required: true
    },
    Need_Psychologist: {
        type: Boolean,
        required: true
    },
    AbuseVictim: {
        type: String,
        default: 'No',
        required: true
    },
    SuicideAttempt: {
        type: Boolean,
        required: true
    },
    SuicideToughts: {
        type: Boolean,
        required: true
    },
    DrugsProblem: {
        type: Boolean,
        required: true
    },
    AlcoholProblems: {
        type: Boolean,
        required: true
    },
    TakeMedication: {
        type: Boolean,
        required: true
    },
    Medication: {
        type: String,
        required: false
    },
    EmploymentSituation: {
        type: String,
        required: true
    },
    WorkingHours: {
        type: Number,
        min: 5,
        required: false
    },
    Unemployed: {
        type: String,
        required: false
    },
    SupportInstitutions: {
        type: String,
        required: true
    },
    PersonsInTheHouse: {
        type: Number,
        max: 12,
        required: true
    },
    UnderagePeople: {
        type: Number,
        required: true
    },
    DisabilitiePersons: {
        type: Number,
        required: true
    },
    HouseIncome: {
        type: Number,
        required: true
    },
    IncomeSource: {
        type: String,
        required: true
    },
    HouseHolding: {
        type: String,
        required: true
    },
    HouseCondition: {
        type: String,
        required: true
    },
    HouseMembers: {
        type: HouseMember[],
        required: true
    }
})
module.exports  = mongoose.model('Person', PersonSchema)