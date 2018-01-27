'use strict'

const express = require('express')
const PersonCtrl = require('./PersonRouter')
const api = express.Router()

api.get('/getAllPersons', PersonCtrl.getPersons) // METODO GET
api.post('/create', PersonCtrl.savePerson) // METODO POST
api.put('/update/:personId', PersonCtrl.updatePerson) // METODO PUT
api.delete('/delete/:personId', PersonCtrl.deletePerson) // METODO DELETE

module.exports = api