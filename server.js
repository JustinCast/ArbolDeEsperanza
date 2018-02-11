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
const express = require('express');
const app = express();
const path = require('path')
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// pathlocationstrategy

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +  '/dist/index.html'))
})

console.log('Console listening')