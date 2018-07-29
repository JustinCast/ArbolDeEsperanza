"use strict";

const express = require("express");
const PersonCtrl = require("./PersonRouter");
const UserCtrl = require("./UserRouter");
const EducationCtrl = require("./EducationRouter");
const EmploynmentCtrl = require("./EmploynmentRouter");
const ExpectativeCtrl = require("./ExpectativeRouter");
const HealthCtrl = require("./HealthRouter");
const SocioEconomicCtrl = require("./SocioEconomicRouter");

const api = express.Router();
// person endpoints
api.get("/getAllPersons", PersonCtrl.getPersons); // METODO GET
api.post("/create", PersonCtrl.savePerson); // METODO POST
api.put("/update/:_id", PersonCtrl.updatePerson); // METODO PUT
api.delete("/delete/:_id", PersonCtrl.deletePerson); // METODO DELETE

// user endpoints
api.get("/user/getAllUsers", UserCtrl.getUsers); // METODO GET
api.get("/user/getUser/:username/:comparePassword", UserCtrl.getUser); // METODO GET
api.post("/user/createUser", UserCtrl.saveUser); // METODO POST
api.put("/user/updateUser/:_id", UserCtrl.updateUser); // METODO PUT
api.delete("/user/deleteUser/:_id", UserCtrl.deleteUser); // METODO DELETE

// education endpoints
api.get("/education", EducationCtrl.getEducationDocs); // METODO GET
api.get(
  "/education/getEducationByPersonID/:PersonID",
  EducationCtrl.getEducationByPersonID
); // METODO GET
api.get(
  "/education/verifyExistency/:PersonID",
  EducationCtrl.getEducationByPersonID
);
api.post("/education/saveEducationDoc", EducationCtrl.saveEducationDoc); // METODO POST
api.put("/education/updateEducationDoc", EducationCtrl.updateEducationDoc); // METODO PUT
api.delete(
  "/education/deleteEducationDoc/:_id",
  EducationCtrl.deleteEducationDoc
); // METODO DELETE

// employnment endpoints
api.get("/employnment", EmploynmentCtrl.getEmploynmentsDocs); // METODO GET
api.get(
  "/employnment/getEmploynmentByPersonID/:PersonID",
  EmploynmentCtrl.getEmploynmentByPersonID
); // METODO GET
api.get(
  "/employnment/verifyExistency/:PersonID",
  EmploynmentCtrl.getEmploynmentByPersonID
);
api.post("/employnment/saveEmploynmentDoc", EmploynmentCtrl.saveEmploynmentDoc); // METODO POST
api.put(
  "/employnment/updateEmploynmentDoc",
  EmploynmentCtrl.updateEmploynmentDoc
); // METODO PUT
api.delete(
  "/employnment/deleteEmploynmentDoc/:_id",
  EmploynmentCtrl.deleteEmploynmentDoc
); // METODO DELETE

// expectatives endpoints
api.get("/expectative", ExpectativeCtrl.getExpectativesDocs); // METODO GET
api.get(
  "/expectative/getExpectativeByPersonID/:PersonID",
  ExpectativeCtrl.getExpectativeByPersonID
); // METODO GET
api.get(
  "/expectative/verifyExistency/:PersonID",
  ExpectativeCtrl.verifyExistency
); // METODO GET
api.post("/expectative/saveExpectativeDoc", ExpectativeCtrl.saveExpectativeDoc); // METODO POST
api.put(
  "/expectative/updateExpectativeDoc",
  ExpectativeCtrl.updateExpectativeDoc
); // METODO PUT
api.delete(
  "/expectative/deleteExpectativeDoc/:_id",
  ExpectativeCtrl.deleteExpectativeDoc
); // METODO DELETE

// health endpoints
api.get("/health", HealthCtrl.getHealthsDocs); // METODO GET
api.get(
  "/health/getHealthByPersonID/:PersonID",
  HealthCtrl.getHealthByPersonID
); // METODO GET
api.get("/health/verifyExistency/:PersonID", HealthCtrl.verifyExistency); // METODO GET
api.post("/health/saveHealthDoc", HealthCtrl.saveHealthDoc); // METODO POST
api.put("/health/updateHealthDoc", HealthCtrl.updateHealthDoc); // METODO PUT
api.delete("/health/deleteHealthDoc/:_id", HealthCtrl.deleteHealthDoc); // METODO DELETE

// socioeconomic endpoints
api.get("/socioeconomic", SocioEconomicCtrl.getSocioEconomicsDocs); // METODO GET
api.get(
  "/socioeconomic/getSocioEconomicByPersonID/:PersonID",
  SocioEconomicCtrl.getSocioEconomicByPersonID
); // METODO GET
api.get(
  "/socioeconomic/verifyExistency/:PersonID",
  SocioEconomicCtrl.verifyExistency
); // METODO GET
api.post(
  "/socioeconomic/saveSocioEconomicDoc",
  SocioEconomicCtrl.saveSocioEconomicDoc
); // METODO POST
api.put(
  "/socioeconomic/updateSocioEconomicDoc",
  SocioEconomicCtrl.updateSocioEconomicDoc
); // METODO PUT
api.delete(
  "/socioeconomic/deleteSocioEconomicDoc/:_id",
  SocioEconomicCtrl.deleteSocioEconomicDoc
); // METODO DELETE

// auxiliar endpoints
api.get(
  "/getPeopleWithoutExpectativeDoc",
  PersonCtrl.getPeopleWithoutExpectativesDoc
);
api.get(
  "/getPeopleWithoutEducationDoc",
  PersonCtrl.getPeopleWithoutEducationDoc
);
api.get(
  "/getPeopleWithoutSocioEconomicDoc",
  PersonCtrl.getPeopleWithoutSocioEconomicDoc
);
api.get(
  "/getPeopleWithoutEmploynmentDoc",
  PersonCtrl.getPeopleWithoutEmploynmentDoc
);
api.get("/getPeopleWithoutHealthDoc", PersonCtrl.getPeopleWithoutHealthDoc);

module.exports = api;
