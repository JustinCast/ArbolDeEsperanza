'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HealthSchema = new Schema({
    SocialSecurityType: {
        type: String,
        required: true
    },
    Need: {
        Need_Doctor: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
        Need_Ophthalmologist: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
        Need_Mammography: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
        Need_Dentist: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
        Need_Gynecologist: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
        Need_Psychologist: {
            type: Boolean,
            required: true,
            resolved: Boolean
        },
    },
    TakeMedication: {
        type: Boolean,
        required: true
    },
    Medication: {
        type: Array,
        required: false
    },
    ConsultationReasons: {
        Anxiety: {
            type: Boolean,
            required: false
        },
        Depression: {
            type: Boolean,
            required: false
        },
        LowSelfEsteem: {
            type: Boolean,
            required: false
        },
        SuicidalThoughts: {
            type: Boolean,
            required: false
        },
        SuicidalActions: {
            type: Boolean,
            required: false
        },
        DomesticViolence: {
            type: Boolean,
            required: false
        },
        DifficultyMakingDecision: {
            type: Boolean,
            required: false
        },
        MemoryLoss: {
            type: Boolean,
            required: false
        },
        LearningProblems: {
            type: Boolean,
            required: false
        },
        DeathHandling: {
            type: Boolean,
            required: false
        },
        AngerHandling: {
            type: Boolean,
            required: false
        },
        EatingDisorders: {
            type: Boolean,
            required: false
        },
        Phobias: {
            type: Boolean,
            required: false
        },
        Sexuality: {
            type: Boolean,
            required: false
        },
        FamilyRightsInquiries: {
            type: Boolean,
            required: false
        },
        SexualDiversity: {
            type: Boolean,
            required: false
        },
        Other: {
            type: String,
            required: false
        }
    },
    Violence: {
        Emotional: {
            type: Boolean,
            required: false
        },
        Sexual: {
            type: Boolean,
            required: false
        },
        Patrimonial: {
            type: Boolean,
            required: false
        },
        Economical: {
            type: Boolean,
            required: false
        },
        Physical: {
            type: Boolean,
            required: false
        }
    },
    AlcoholProblems: {
        type: Boolean,
        required: true
    },
    DrugsProblems: {
        type: Boolean,
        required: true
    },
    SuicidalAttempts: {
        type: Boolean,
        required: true
    },
    SuicidalThoughts: {
        type: Boolean,
        required: true
    },
    Resolutions: [{
        Name: String,
        ResolutionDate: Date
    }],
    PersonID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
        required: false
    }
})
module.exports  = mongoose.model('health', HealthSchema)