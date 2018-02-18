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
api.get('/admin/getAdmin/:username/:password', AdminCtrl.getAdmin) // METODO GET
api.post('/admin/createAdmin', AdminCtrl.saveAdmin) // METODO POST
api.put('/admin/updateAdmin/:adminId', AdminCtrl.updateAdmin) // METODO PUT
api.delete('/admin/deleteAdmin/:admin', AdminCtrl.deleteAdmin) // METODO DELETE
module.exports = api