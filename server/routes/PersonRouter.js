'use strict'

var Person = require('../models/PersonSchema') // importacion del modelo
var Expectative = require('../models/ExpectativesSchema')
var Education = require('../models/EducationSchema')
var SocioEconomic = require('../models/SocioEconomicSchema')
var Employnment = require('../models/EmploynmentSchema')
var Health = require('../models/HealthSchema')
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
/***
 * TODO: cambiar la forma de creación del objecto persona
 * ya que depende de varios esquemas
 */
function savePerson(req, res) {
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
//TODO: cambiar la forma de inicialización por la dependencia entre esquemas
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

function insertExpectatives(req, res) {
    let expectative = new Expectative(req)
}

module.exports = {
    getPersons,
    savePerson,
    updatePerson,
    deletePerson
}