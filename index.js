console.log("INDICE DEL SERVIDOR")
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// API file for interacting with MongoDB
const app = require('./server');

//Set Port
const port = 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, err => {
    if(err){
        console.log(err)
        return
    }
    console.log('Conexión exitosa')
});