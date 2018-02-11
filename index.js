const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose') 
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const MONGO_URI = 'mongodb://justin:cast123@ds149577.mlab.com:49577/ade'; 
mongoose.connect(MONGO_URI, (err, res) => {
    if(err){
        console.log(err)
        return
    }
    console.log("Conexión exitosa con la BD")
})

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/person', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));