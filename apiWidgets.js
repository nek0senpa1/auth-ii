const widget = require('express').Router();

const murderHobos = require('./funkyTime/stuff');
// const restricted = require('../auth/restricted-middleware.js');



widget.get('/', (req, res) => {
  murderHobos.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = widget;
