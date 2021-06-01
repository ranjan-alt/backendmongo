const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')

const mongoose = require('./db.js');
const routes = require('./routes/routes');


const  app = express();

app.use(bodyParser.json());
app.use(cors({origin:'https://localhost:4200/'}));

app.listen(3000, ()=> console.log('server started at port : 3000'));

app.use('/employees', routes)