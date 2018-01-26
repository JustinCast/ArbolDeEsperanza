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
    mongoose.connect(config.db, (err, res) => {
        if(err) {
            console.log(`Error al conectar a la base de datos: ${err}`)
            return
        }
        console.log('Conexión exitosa a la base de datos...')
    
        app.listen(config.port, () => {
            console.log(`API REST corriendo en http://localhost:${config.port}`)
        })
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