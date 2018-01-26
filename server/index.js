const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// API file for interacting with MongoDB
const Server = require('./server');

//Set Port
const port = 3000;
Server.set('port', port);

const server = http.createServer(Server);

server.listen(port, err => {
    if(err){
        console.log(err)
        return
    }
    console.log('Conexión exitosa')
});