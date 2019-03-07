const express = require('express');
const bcrypt = require('bcryptjs');
const knex = require('knex');
const jwt = require('jsonwebtoken');

const secrets = require('./isItSecret/isItSafe');

const murderHobos = require('./funkyTime/stuff');

const widget = express();

// ------------------------------------------------

widget.get('/test', (req, res) => {
  murderHobos.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err,'hmmmm... nope you took a wrong turn at Albequerqe'));
    
});

widget.post('/regtest', (rec, res) => {
    const nooby = rec.body;
    console.log(rec.body);
    murderHobos.add(nooby)
    .then( stuff =>{
        res.send(stuff)
    })
    .catch( err => { 
        res.send('err... that function is probably not working... for some reason')
    })
})


// ------------------------------------------------

widget.post('/register', (rec, rez) => {
    const nooby = rec.body;

    console.log(nooby);

    const hash = bcrypt.hashSync(nooby.password, 10);

    nooby.password = hash;

    murderHobos.add(nooby)
    .then(stuff => {
        if (stuff) {
            let tolkien = generateTolkien(stuff)

        rez.status(200).json({message: 'Nooby Registered:', token})
        }
    })
    .catch(err => {
        rez.send('User already exists...')
    })
})

widget.post('/login', (rec,rez) => {
    let { username, password } = rec.body;

    murderHobos.findBy({username: username})
    .first()
    .then(hooah => {
        if (bcrypt.compareSync(password, hooah.password)) {
            let tolkien = makeTolkien(hooah);

            rez.status(200).json({
                message: `Hello ${hooah.username}.  The Matrix now has you...`,
                tolkien,
            })
        } else {
            res.status(402).json({message: 'Nah... that ain\'t you...'})
        }
    })
    .catch(err => {
        rez.status(500).json({err, message:'mmmmmm..... no.... No that is not right.'})
    })
})


function makeTolkien(object) {

    const payload = {
        subject: object.id,
        username: object.username,
        iat: 525600
    };

    const options = {
        expiresIn: '5m',
    };

    return jwt.sign(payload, secrets.shhhhh, options);

}

module.exports = widget;
