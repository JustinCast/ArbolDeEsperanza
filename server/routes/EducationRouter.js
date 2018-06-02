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

function saveEducationDoc(req, res) {
    let education = new Education(req.body)
    
    education.save((err, educationStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        
        else{
            res.status(200).send({_id: educationStored._id})
        }
    })
}

function updateEducationDoc(req, res) {
    let education_id  = req.params._id
    let update = req.body
    Education.findByIdAndUpdate(education_id, update, (err, educationUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({_id: educationUpdated._id})
        }
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
    saveEducationDoc,
    updateEducationDoc,
    deleteEducationDoc
}