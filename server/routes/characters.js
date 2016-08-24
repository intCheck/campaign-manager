'use strict';

const Model = require('../models/characters')
const characters = [
  {
    method: 'GET',
    path: '/char',
    handler: function (request, reply) {
        Model.find()
          .then(function(result) {
            console.log('RESULT FROM MONGO:', result);
          })
          .catch(function(error) {
            console.log('ERROR FINDING CHARACTERS', error);
          })
        // reply('replace with function to get characters!');
    }
  },
  {
    method: 'POST',
    path: '/char',
    handler: function (request, reply) {

        reply('figure out how to handle this route')
    }
  }
]

// some changes
module.exports = characters;
