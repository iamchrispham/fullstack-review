const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
let app = express();
let port = 1128;

app.use(bodyparser.urlencoded( {extended: true}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var {body} = req;
  console.log('REQ.BODY', req.body);
  console.log('BODY', body);
  res.status(201).send(`This is what you posted! (sent from server-side): ${body}`);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  //prelim test
  var {body} = req;
  console.log('GET:', body);
  res.status(200).send(`Get Request Success.  Data: ${req.body}`);
});


app.listen(port, function() {
  console.log(`Listenin' on port ${port}`);
});

