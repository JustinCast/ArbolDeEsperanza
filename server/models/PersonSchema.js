'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HouseMember = require('./HouseMember')

const PersonSchema = new Schema({
    Name: String,
    EntryDate: Date,
    ActiveOrInactive: Boolean,
    Age: Number,
    BornDate: Date,
    Read: Boolean,
    Write: Boolean,
    SocialSecurity: Boolean,
    SocialSecurityType: String,
    Education: String,
    Nationality: String,
    PhoneNumber: String,
    Address: String,
    Email: String,
    Need_Doctor: Boolean,
    Need_Ophthalmologist: Boolean,
    Need_Mammography: Boolean,
    Need_Dentist: Boolean,
    Need_Gynecologist: Boolean,
    Need_Psychologist: Boolean,
    AbuseVictim: Boolean,
    SuicideAttempt: Boolean,
    SuicideToughts: Boolean,
    DrugsProblem: Boolean,
    AlcoholProblems: Boolean,
    TakeMedication: Boolean,
    Medication: String,
    EmploymentSituation: String,
    WorkingHours: Number,
    UnemployedDate: String,
    SupportInstitutions: String,
    PersonsInTheHouse: Number,
    UnderagePeople: Number,
    DisabilitiePersons: Number,
    HouseIncome: Number,
    IncomeSource: String,
    HouseHolding: String,
    HouseCondition: String,
    HouseMembers: Object
})
module.exports  = mongoose.model('Person', PersonSchema)