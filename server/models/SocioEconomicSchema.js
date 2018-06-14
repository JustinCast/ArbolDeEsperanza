'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SocioEconomicSchema = new Schema({
    PeopleInTheHouse: {
        type: String,
        required: true
    },
    UnderagePeople: {
        type: String,
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
        type: String,
        required: true
    },
    FamilyIncome: {
        type: String,
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
    PersonID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
        required: false
    }
})
module.exports  = mongoose.model('socioeconomic', SocioEconomicSchema)