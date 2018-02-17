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