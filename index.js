const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const knex = require('knex');



const apiPlaces = require('./apiWidgets');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', apiPlaces);


server.get('/', (req, res) => {
  res.send("It's Working.  It's Working! -Anakin Skywalker");
});


const port = process.env.PORT || 5500;
server.listen(port, () => console.log(`Hi Port ${port} !!! Nice to See You Again ;)`));