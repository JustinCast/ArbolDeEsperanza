'use strict'
var Employnment = require('../models/EmploynmentSchema')

function getEmploynmentsDocs(req, res) {
    Employnment.find({})
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

function saveEmploynmentDoc(req, res) {
    let employnment = new Employnment(req.body)
    
    employnment.save((err, employnmentStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        
        else{
            res.status(200).send({_id: employnmentStored._id})
        }
    })
}

function updateEmploynmentDoc(req, res) {
    let employnment_id  = req.params.employnment_id
    let update = req.body
    Employnment.findByIdAndUpdate(employnment_id, update, (err, employnmentUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({_id: employnmentUpdated._id})
        }
    })
}

function deleteEmploynmentDoc(req, res) {
    let employnment_id  = req.params.employnment_id
    Employnment.findById(employnment_id, (err, employnment) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el documento: ${err}`})
        else
            employnment.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el documento: ${err}`})
                else
                    res.status(200).send({message: 'Documento Eliminado'})
            })
    })
}

module.exports = {
    getEmploynmentsDocs,
    saveEmploynmentDoc,
    updateEmploynmentDoc,
    deleteEmploynmentDoc
}