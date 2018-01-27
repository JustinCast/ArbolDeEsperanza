'use strict'

const Person = require('../models/PersonSchema') // importacion del modelo

function getPersons(req, res) {
    Person.find({}, (err, persons) => {
        if(err)
            return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        else if(!persons)
            return res.status(404).send({message: `No existen personas: ${err}`})
        else{
            res.status(200).send(persons)
        }
    })
}

function savePerson(req, res) {
    console.log(req.body)
    // almacenar en la base de datos
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