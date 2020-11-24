const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const celebrities = [
    {
        name: "Brad",
        occupation: "actor",
        catchPhrase: "yummy"
    },
    {
        name: "Will",
        occupation: "actor",
        catchPhrase: "yo!"
    },
    {
        name: "Shak",
        occupation: "singer",
        catchPhrase: "hola!!"
    },
];

Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities: ${err}`));
