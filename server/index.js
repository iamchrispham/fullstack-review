const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const saveToDb = require('../database');
const getRepo = require('../helpers/github.js')
let app = express();
let port = 1128;

app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // xThis route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('db', db);
  var {query} = req.body;
  console.log('QUERY', query);
  res.status(201).send(`This is what you posted! (sent from server-side): ${query}`);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  //prelim test

  res.status(200).send(`Get Request Success.  Data: ${req.body}`);
});


app.listen(port, function() {
  console.log(`Listenin' on port ${port}`);
});

