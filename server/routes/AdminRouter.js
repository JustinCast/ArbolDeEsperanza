'use strict'
var Admin = require('../models/AdminSchema')
var bcrypt = require('bcrypt')
function getAdmin(req, res) {
    let adminId = req.params.adminId
    let adminPassword = req.params.adminPassword
    Admin.findById(adminId, (err, admin)=> {
        if(err)
            res.status(500).send({message: `Administrador no encontrado: ${err}`})
        else{ 
            admin.comparePassword(adminPassword, (err, isMatch) => {
                if(err)
                    res.status(500).send({message: `Internal Server Error: ${err}`})
                else{
                    if(isMatch)
                        res.status(201).send({admin: admin})
                    else
                        res.status(401).send({message: `Credenciales incorrectas: ${err}`})    
                }
            })
        }
    })
}

function saveAdmin(req, res) {
    console.log(req.body)
    // almacenar en la base de datos
    console.log(req.body)
    let admin = new Admin(req.body)
    admin.save((err, adminStored) => {
        if(err) res.status(500).send({message: `Error al guardar el usuario administrador: ${err}`})        
        else{
            res.status(200).send({admin: adminStored})
            console.log("Usuario Administrador guardado con éxito")
        }
    })
}

function updateAdmin(req, res) {
    let adminId  = req.params.adminId
    let update = req.body
    console.log(req.body)
    Admin.findByIdAndUpdate(adminId, update, (err, adminUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el adiministrador: ${err}`})
        else{
            console.log("Administrador actualizado correctamente")
            res.status(201).send({admin: adminUpdated})
        }
    })
}

function deleteAdmin(req, res) {
    let adminId  = req.params.adminId
    Admin.findById(adminId, (err, admin) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el administrador: ${err}`})
        else
            admin.remove( err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el administrador: ${err}`})
                else
                    res.status(200).send({message: 'El administrador ha sido borrado'})
            })
    })
}