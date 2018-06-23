'use strict'
var Education = require('../models/EducationSchema')
function getEducationDocs(req, res) {
    Education.find({})
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

function getEducationByPersonID(req, res) {
    let personID = req.params.PersonID
    Education.find({PersonID: personID})
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

function saveEducationDoc(req, res) {
    console.log(req.body)
    let education = new Education(req.body)
    education.save((err, educationStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        else
            res.status(200).send({message: `Documento guardado con éxito`}) 
    }) 
}

function updateEducationDoc(req, res) {
    let update = req.body
    console.log(req.body)
    Education.findOneAndUpdate({PersonID: update.PersonID}, update, (err, educationUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({message: 'Documento actualizado con éxito'})
        }
    })
}

function verifyExistency(req, res) {
    let PersonID = req.params.PersonID
    Education.find({PersonID: PersonID}, (err, education) => {
        if(err)
            res.status(500).send({message: `Documento no encontrado`})
        else
            res.json(education)
    })
}

function deleteEducationDoc(req, res) {
    let education_id  = req.params._id
    Education.findById(education_id, (err, education) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el documento: ${err}`})
        else
            education.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el documento: ${err}`})
                else
                    res.status(200).send({message: 'Documento Eliminado'})
            })
    })
}

module.exports = {
    getEducationDocs,
    getEducationByPersonID,
    saveEducationDoc,
    updateEducationDoc,
    verifyExistency,
    deleteEducationDoc
}