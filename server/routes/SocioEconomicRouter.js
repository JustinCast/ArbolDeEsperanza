'use strict'
var SocioEconomic = require('../models/SocioEconomicSchema')

function getSocioEconomicsDocs(req, res) {
    SocioEconomic.find({})
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

function saveSocioEconomicDoc(req, res) {
    let socioEconomic = new SocioEconomic(req.body)
    
    socioEconomic.save((err, socioEconomicStored) => {
        if(err) res.status(500).send({message: `Error al guardar el documento: ${err}`})
        
        else{
            res.status(200).send({_id: socioEconomicStored._id})
        }
    })
}

function updateSocioEconomicDoc(req, res) {
    let socioEconomic_id  = req.params.SocioEconomic_id
    let update = req.body
    SocioEconomic.findByIdAndUpdate(socioEconomic_id, update, (err, socioEconomicUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar el documento: ${err}`})
        else{
            res.status(201).send({_id: socioEconomicUpdated._id})
        }
    })
}

function deleteSocioEconomicDoc(req, res) {
    let socioEconomic_id  = req.params.socioEconomic_id
    SocioEconomic.findById(socioEconomic_id, (err, socioEconomic) => {
        if(err)
            res.status(500).send({message: `Error al encontrar el documento: ${err}`})
        else
            socioEconomic.remove(err => {
                if(err)
                    res.status(500).send({message: `Error al borrar el documento: ${err}`})
                else
                    res.status(200).send({message: 'Documento Eliminado'})
            })
    })
}

module.exports = {
    getSocioEconomicsDocs,
    saveSocioEconomicDoc,
    updateSocioEconomicDoc,
    deleteSocioEconomicDoc
}