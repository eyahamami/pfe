const express = require('express');
var cors = require('cors');
const connection = require('./config/connection');
const bodyParser = require('body-parser');
const companyRoute = require('./routes/company');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/company',companyRoute);




module.exports=app;