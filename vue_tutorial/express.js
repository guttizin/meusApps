// Import expressJs
const express = require('express');
const appExpress = express();

// Import cors
const cors = require('cors');
appExpress.use(cors())
// Import dotenv
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.DB_HOST);

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// });

// GET method route
appExpress.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });
  
  // POST method route
  appExpress.post('/', function (req, res) {
    res.send('POST request to the homepage');
  });
// Metodo get referente ao CORS
  appExpress.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
// Método de criação do app expressJs
  appExpress.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })