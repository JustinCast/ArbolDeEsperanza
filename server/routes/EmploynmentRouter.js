"use strict";
var Employnment = require("../models/EmploynmentSchema");

function getEmploynmentsDocs(req, res) {
  Employnment.find({})
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

function getEmploynmentByPersonID(req, res) {
  let personID = req.params.PersonID;
  Employnment.find({ PersonID: personID })
    .then(data => {
      res.json(data);
      console.log(data);
    })
    .catch(err => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });
}

function saveEmploynmentDoc(req, res) {
  let employnment = new Employnment(req.body);

  employnment.save((err, employnmentStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al guardar el documento: ${err}` });
    else {
      res.status(200).send({ _id: employnmentStored._id });
    }
  });
}

function updateEmploynmentDoc(req, res) {
  let update = req.body;
  Employnment.findOneAndUpdate(
    { PersonID: update.PersonID },
    update,
    (err, employnmentUpdated) => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al actualizar el documento: ${err}` });
      else {
        res.status(201).send({ message: "Documento actualizado con éxito" });
      }
    }
  );
}

function verifyExistency(req, res) {
  let PersonID = req.params.PersonID;
  Employnment.find({ PersonID: PersonID }, (err, employnment) => {
    if (err) res.status(500).send({ message: `Documento no encontrado` });
    else res.json(employnment);
  });
}

function deleteEmploynmentDoc(req, res) {
  let employnment_id = req.params._id;
  Employnment.findById(employnment_id, (err, employnment) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al encontrar el documento: ${err}` });
    else
      employnment.remove(err => {
        if (err)
          res
            .status(500)
            .send({ message: `Error al borrar el documento: ${err}` });
        else res.status(200).send({ message: "Documento Eliminado" });
      });
  });
}

module.exports = {
  getEmploynmentsDocs,
  getEmploynmentByPersonID,
  saveEmploynmentDoc,
  updateEmploynmentDoc,
  verifyExistency,
  deleteEmploynmentDoc
};
