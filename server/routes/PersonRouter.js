"use strict";

var Person = require("../models/PersonSchema"); // importacion del modelo

function getPersons(req, res) {
  Person.find({})
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function savePerson(req, res) {
  // almacenar en la base de datos
  console.log(req.body);
  let person = new Person(req.body);
  // para guardar un producto que cuenta con las funciones de mongoose
  person.save((err, personStored) => {
    if (err)
      res.status(500).send({ message: `Error al guardar la persona: ${err}` });
    else {
      res.status(200).send({ person: personStored });
      console.log("Persona guardado con éxito");
    }
  });
}

function updatePerson(req, res) {
  let personId = req.params._id;
  let update = req.body;
  console.log(req.body);
  Person.findByIdAndUpdate(personId, update, (err, personUpdated) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al actualizar la persona: ${err}` });
    else {
      console.log("Persona actualizado correctamente");
      res.status(201).send({ person: personUpdated });
    }
  });
}

function deletePerson(req, res) {
  let personId = req.params._id;
  Person.findById(personId, (err, person) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al encontrar la persona: ${err}` });
    else
      person.remove(err => {
        if (err)
          res
            .status(500)
            .send({ message: `Error al borrar la persona: ${err}` });
        else res.status(200).send({ message: "La persona ha sido eliminada" });
      });
  });
}

function getPeopleWithoutExpectativesDoc(req, res) {
  Person.find({ Expectatives: undefined })
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function getPeopleWithoutEducationDoc(req, res) {
  Person.find({ Education: undefined })
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function getPeopleWithoutSocioEconomicDoc(req, res) {
  Person.find({ SocioEconomic: undefined })
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function getPeopleWithoutEmploynmentDoc(req, res) {
  Person.find({ Employnment: undefined })
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function getPeopleWithoutHealthDoc(req, res) {
  Person.find({ Health: undefined })
    .then(data => {
      res.json(data);
      //console.log(data)
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

module.exports = {
  getPersons,
  savePerson,
  updatePerson,
  deletePerson,
  getPeopleWithoutExpectativesDoc,
  getPeopleWithoutEducationDoc,
  getPeopleWithoutSocioEconomicDoc,
  getPeopleWithoutEmploynmentDoc,
  getPeopleWithoutHealthDoc
};
