'use strict'
const Budget = require('./classes/Budget')
const mongoose = require('mongoose')
const Schema = Mongoose.Schema

const SocioEconomicSchema = new Schema({
    PeopleInTheHouse: {
        type: Number,
        required: true
    },
    UnderagePeople: {
        type: Number,
        required: true
    },
    HomeServices: {
        type: Array,
        required: true
    },
    Payman: {
        type: String,
        required: true
    },
    ChildrenHelp: {
        type: Array,
        default: '',
        required: true
    },
    InstitutionsHelp: {
        type: Array,
        required: true
    },
    MainHouseProvider: {
        type: String,
        required: true
    },
    MonthlyIncome: {
        type: Number,
        required: true
    },
    FamilyIncome: {
        type: Number,
        required: true
    },
    Budget: {
        BudgetPlan: {
            type: Number,
            required: true
        },
        TotalServices: {
            type: Array,
            required: true
        },
        TotalAmount: {
            type: Number,
            required: true
        }
    },
    HouseHolding: {
        type: String,
        required: true
    },
    HouseCondition: {
        type: String,
        required: true
    },
})