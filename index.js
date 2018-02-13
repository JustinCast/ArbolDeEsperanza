console.log('SERVER IS NOW STARTING ...')
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

const MONGO_URI = 'mongodb://heroku_bfd3g8lf:ceikiofr9hospap8spgevnofho@ds233228.mlab.com:33228/heroku_bfd3g8lf'; 
mongoose.connect(process.env.MONGODB_URI || MONGO_URI, (err, res) => {
    if(err){
        console.log('No se pudo establecer conexión con la BD' + err)
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
// const express = require('express');
// const app = express();
// const path = require('path')
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + 'dist'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);

// // pathlocationstrategy

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname +  '/dist/index.html'))
// })

// console.log('Console listening')