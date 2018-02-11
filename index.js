// console.log("INDICE DEL SERVIDOR")
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');

// // API file for interacting with MongoDB
// const app = require('./server/server');

// //Set Port
// const port = 3000;
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, err => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Conexión exitosa')
// });

const mongoose = require('mongoose') // capa de abstraccion para la conexion con MongoDB
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const path = require('path')
const api = require('./server/routes/api')

function DBConnection() {
    const MONGO_URI = 'mongodb://justin:cast123@ds149577.mlab.com:49577/ade'; 
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


// Run the app by serving the static files
// in the dist directory
/**
 * Endpoints Config
 */
function routerConfig() {
    let router = express.Router()
    router.get('', (req, res)=>{
        res.json({
            message: 'Initial backend route'
        })
    })
    app.use('/', router)
    app.use('/person', api)
    // demas enrutadores
    app.use(express.static(__dirname + '/dist'));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname +  '/dist/index.html'))
    })
    app.listen(process.env.PORT || 8080);
}
DBConnection()
config()
routerConfig()
// Start the app by listening on the default
// Heroku port

console.log('Console listening')