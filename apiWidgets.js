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
            rez.status(402).json({message: 'Nah... that ain\'t you...'})
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
        
    };

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secrets.shhhhh, options);

}

function badPanda(red, rez, nexto) {
    var taken = red.headers.authorization;
    //console.log(taken);
    if(taken) {
        jwt.verify(taken, secrets.shhhhh, function(problem, hacked) {
            console.log(problem);
            if (problem) {
                rez.status(402).json('You shall not pass - Gandalf the API Wizard')
            } else {
                console.log( 'looks like we made it', hacked);
                nexto();
            }
        })
    } else {
        rez.status(401).json('Bad Panda!  You aren\'t logged in yet...')
    }
}


widget.get('/users', badPanda, (rec, rez) =>{

    murderHobos.find()
    .then(users => {
      rez.json(users);
    })
    .catch(err => rez.send(err,'hmmmm... nope you took a wrong turn at Albequerqe'));
    
})


module.exports = widget;
