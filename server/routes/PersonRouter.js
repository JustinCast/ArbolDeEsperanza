'use strict'

var Person = require('../models/PersonSchema') // importacion del modelo

function getPersons(req, res) {
    Person.find({})
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

function savePerson(req, res) {
    console.log(req.body)
    // almacenar en la base de datos
    console.log(req.body)
    let person = new Person(req.body)
    // para guardar un producto que cuenta con las funciones de mongoose
    person.save((err, personStored) => {
        if(err) res.status(500).send({message: `Error al guardar el producto: ${err}`})
        
        else{
            res.status(200).send({person: personStored})
            console.log("Persona guardado con éxito")
        }
    })
}

function updatePerson(req, res) {
    let personId  = req.params.personId
    let update = req.body
    console.log(req.body)
    Person.findByIdAndUpdate(personId, update, (err, personUpdated) => {
        if(err)
            res.status(500).send({message: `Error al actualizar la persona: ${err}`})
        else{
            console.log("Persona actualizado correctamente")
            res.status(201).send({person: personUpdated})
        }
    })
}

function deletePerson(req, res) {
    let personId  = req.params.personId
    Person.findById(personId, (err, person) => {
        if(err)
            res.status(500).send({message: `Error al encontrar la persona: ${err}`})
        else
            person.remove( err => {
                if(err)
                    res.status(500).send({message: `Error al borrar la persona: ${err}`})
                else
                    res.status(200).send({message: 'La persona ha sido eliminada'})
            })
    })
}

module.exports = {
    getPersons,
    savePerson,
    updatePerson,
    deletePerson
}