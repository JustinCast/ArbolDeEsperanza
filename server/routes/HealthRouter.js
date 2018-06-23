'use strict'
var Health = require('../models/HealthSchema')

function getHealthsDocs(req, res) {
    Health.find({})
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

function getHealthByPersonID(req, res) {
    let personID = req.params.PersonID
    Health.find({PersonID: personID})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            const status = req.statusCode
            res.json({
                status,
                err
            })
        })
}

function saveHealthDoc(req, res) {
    let health = new Health(req.body)
    
    health.save((err, healthStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        
        else{
            res.status(200).send({_id: healthStored._id})
        }
    })
}

function updateHealthDoc(req, res) {
    let update = req.body
    Health.findOneAndUpdate({PersonID: update.PersonID}, update, (err, healthUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({message: 'Documento actualizado con éxito'._id})
        }
    })
}

function verifyExistency(req, res) {
    let PersonID = req.params.PersonID
    Health.find({PersonID: PersonID}, (err, health) => {
        if(err)
            res.status(500).send({message: `Documento no encontrado`})
        else
            res.json(health)
    })
}

function deleteHealthDoc(req, res) {
    let health_id  = req.params._id
    Health.findById(health_id, (err, health) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el documento: ${err}`})
        else
            health.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el documento: ${err}`})
                else
                    res.status(200).send({message: 'Documento Eliminado'})
            })
    })
}

module.exports = {
    getHealthsDocs,
    getHealthByPersonID,
    saveHealthDoc,
    updateHealthDoc,
    verifyExistency,
    deleteHealthDoc
}