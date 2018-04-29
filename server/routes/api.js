'use strict'

const express = require('express')
const PersonCtrl = require('./PersonRouter')
const UserCtrl = require('./UserRouter')
const api = express.Router()
//TODO: terminar de crear los endpoints faltantes
// person endpoints
api.get('/getAllPersons', PersonCtrl.getPersons) // METODO GET
api.post('/create', PersonCtrl.savePerson) // METODO POST
api.put('/update/:personId', PersonCtrl.updatePerson) // METODO PUT
api.delete('/delete/:personId', PersonCtrl.deletePerson) // METODO DELETE
// user endpoints
api.get('/user/getAllUsers', UserCtrl.getUsers) // METODO GET
api.get('/user/getUser/:username/:comparePassword', UserCtrl.getUser) // METODO GET
api.post('/user/createUser', UserCtrl.saveUser) // METODO POST
api.put('/user/updateUser/:userId', UserCtrl.updateUser) // METODO PUT
api.delete('/user/deleteUser/:userId', UserCtrl.deleteUser) // METODO DELETE
module.exports = api