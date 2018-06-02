'use strict'
var Expectative = require('../models/ExpectativesSchema')

function getExpectativesDocs(req, res) {
    Expectative.find({})
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

function saveExpectativeDoc(req, res) {
    let expectative = new Expectative(req.body)
    
    expectative.save((err, expectativeStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        
        else{
            res.status(200).send({_id: expectativeStored._id})
        }
    })
}

function updateExpectativeDoc(req, res) {
    let expectative_id  = req.params._id
    let update = req.body
    Expectative.findByIdAndUpdate(expectative_id, update, (err, expectativeUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({_id: expectativeUpdated._id})
        }
    })
}

function deleteExpectativeDoc(req, res) {
    let expectative_id  = req.params._id
    Expectative.findById(expectative_id, (err, expectative) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el documento: ${err}`})
        else
            expectative.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el documento: ${err}`})
                else
                    res.status(200).send({message: 'Documento Eliminado'})
            })
    })
}

module.exports = {
    getExpectativesDocs,
    saveExpectativeDoc,
    updateExpectativeDoc,
    deleteExpectativeDoc
}