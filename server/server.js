const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = module.exports = express();
const corsOptions = {
  origin: 'http://localhost:3000'
}

const massiveInstance = massive.connectSync({connectionString : 'postgres://postgres@localhost/thursday_review'})

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname+'/public'));
app.set('db', massiveInstance);
const serverCtrl = require('./serverCtrl');
const db = app.get('db');








app.listen(port, function(){
  console.log('Running on port', port);
})