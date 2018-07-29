"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmploynmentSchema = new Schema({
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
    type: String,
    required: false
  },
  WorkFrecuency: {
    type: String,
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
    required: false
  },
  Clients: {
    type: Array,
    required: false
  },
  PersonID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "person",
    required: false
  }
});
module.exports = mongoose.model("employnment", EmploynmentSchema);
