const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose') 
const path = require('path');
const cors = require('cors')
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

function DBConnection() {
    const MONGO_URI = 'mongodb://heroku_bfd3g8lf:ceikiofr9hospap8spgevnofho@ds233228.mlab.com:33228/heroku_bfd3g8lf'
    mongoose.connect(process.env.MONGODB_URI || MONGO_URI, (err, res) => {
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
    app.use('/api', api)
    // demas enrutadores
    // Angular DIST output folder
    app.use(express.static(__dirname + '/dist'));
    
    // Send all other requests to the Angular app
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    });
}

// functions invocations
DBConnection()
config()
routerConfig()


//Set Port
app.listen(process.env.PORT || 8080);
