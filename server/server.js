'use strict'
const mongoose = require('mongoose') // capa de abstraccion para la conexion con MongoDB
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

/**
 * Mongoose connection
 */
function DBConnection() {
    const MONGO_URI = 'mongodb://localhost/WebsiteComunidad'; 
    mongoose.connect(MONGO_URI, (err, res) => {
        if(err){
            console.log(err)
            return
        }
        console.log("Conexión exitosa con la BD")
    })
}

/**
 * Server config
 */
function config() {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    })
}

/**
 * Endpoints Config
 */
function routerConfig() {
    let router = express.Router()
    // initial server route
    router.get('', (req, res)=>{
        res.json({
            message: 'Initial backend route'
        })
    })
    app.use('/', router)
    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    // demas enrutadores
}

// functions invocations
DBConnection()
config()
routerConfig()

module.exports = app