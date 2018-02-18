'use strict'

const express = require('express')
const PersonCtrl = require('./PersonRouter')
const AdminCtrl = require('./AdminRouter')
const api = express.Router()

// person endpoints
api.get('/getAllPersons', PersonCtrl.getPersons) // METODO GET
api.post('/create', PersonCtrl.savePerson) // METODO POST
api.put('/update/:personId', PersonCtrl.updatePerson) // METODO PUT
api.delete('/delete/:personId', PersonCtrl.deletePerson) // METODO DELETE
// admin endpoints
api.get('/getAdmin', AdminCtrl.getAdmin) // METODO GET
api.get('/getByUserName', AdminCtrl.getByUsername) // METODO GET
api.post('/createAdmin', AdminCtrl.saveAdmin) // METODO POST
api.put('/updateAdmin/:adminId', AdminCtrl.updateAdmin) // METODO PUT
api.delete('/deleteAdmin/:admin', AdminCtrl.deleteAdmin) // METODO DELETE
module.exports = api