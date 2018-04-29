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
    let health_id  = req.params.health_id
    let update = req.body
    Health.findByIdAndUpdate(health_id, update, (err, healthUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({_id: healthUpdated._id})
        }
    })
}

function deleteHealthDoc(req, res) {
    let health_id  = req.params.health_id
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
    saveHealthDoc,
    updateHealthDoc,
    deleteHealthDoc
}