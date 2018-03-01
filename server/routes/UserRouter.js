'use strict'
var User = require('../models/UserSchema')
var bcrypt = require('bcrypt')

function getUsers(req, res) {
    User.find({})
        .then(data => {
            res.json(data)
            //console.log(data)
        })
        .catch(err => {
            const status = req.statusCode
            res.json({
                status,
                err
            })
        })
}

function getUser(req, res) {
    let username = req.params.username
    let comparePassword = req.params.comparePassword
    console.log(req.params.username + " | "+ req.params.password)
    User.findOne({"UserName": username}, (err, user)=> {
        if(err)
            res.status(500).send({message: `Usuario no encontrado: ${err}`})
        else{ 
            user.comparePassword(comparePassword, (err, isMatch) => {
                if(err)
                    res.status(500).send({message: `Internal Server Error: ${err}`})
                else{
                    if(isMatch)
                        res.status(201).send({isMatch: true})
                    else
                        res.status(401).send({isMatch: false})    
                }
            })
        }
    })
}

function saveUser(req, res) {
    console.log(req.body)
    // almacenar en la base de datos
    let user = new User(req.body)
    user.save((err, userStored) => {
        if(err) res.status(500).send({message: `Error al guardar el usuario: ${err}`})        
        else{
            res.status(200).send({user: userStored})
            console.log("Usuario guardado con éxito")
        }
    })
}

function updateUser(req, res) {
    let userId  = req.params.userId
    let update = req.body
    console.log(req.body)
    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el usuario: ${err}`})
        else{
            console.log("Usuario actualizado correctamente")
            res.status(201).send({user: userUpdated})
        }
    })
}

function deleteUser(req, res) {
    let userId = req.params.userId
    User.findById(userId, (err, user) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el usuario: ${err}`})
        else
            user.remove( err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el usuario: ${err}`})
                else
                    res.status(200).send({message: 'El usuario ha sido borrado'})
            })
    })
}

module.exports = {
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser
}