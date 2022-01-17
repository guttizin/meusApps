// Import expressJs
const express = require('express');
const appExpress = express();

const path = require('path');

// Import cors
const cors = require('cors');
appExpress.use(cors())
// Import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Connection String to postgres localhost using pg
var pg = require('pg');
// var connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// Create the pool
// const pool = new pg.Pool({
//   connectionString: connectionString,
//   ssl: false
// });

const pool = new pg.Pool();

// Requesting connection to the database
// var pgClient = new pg.Client(connectionString);
// pgClient.connect();
// var query = pgClient.query("SELECT version();");

// Requesting connection by POOL
// var query = pool.query('select version();')
startTime = new Date();
pool.query('SELECT * from bdi_20210910_02', (err, res) => {

  console.log("aeaeae",err, res)
  endTime = new Date();
  console.log(startTime, endTime);
  console.log("Time: ", endTime - startTime);
  pool.end()
})

// console.log(process.env.PGUSER);



// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// });

// GET method route
appExpress.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  // console.log(query);
  // pgClient.end();
});

// POST method route
appExpress.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
// Metodo get referente ao CORS
appExpress.get('/products/:id', function (req, res, next) {
  res.json({
    msg: 'This is CORS-enabled for all origins!'
  })
})
// Método de criação do app expressJs
// set port, listen for requests
const PORT = process.env.PORT || 80;
appExpress.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`)
})