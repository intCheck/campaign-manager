const m = require('mithril');
const request = require('superagent');
const Req = {};
const host = 'http://localhost:1337/';

// A basic formula for a get request
Req.getRequest = url => {
  return new Promise(function(resolve, reject){
    request
      .get(host + url)
      .then( response => {
        console.log('response', response);
        resolve(response);
      })
      .catch( error => {
        reject(error)
       console.log('Got an error:', error )
      })
  })
};

// A basic post formula
Req.postRequest = (url, data) => {
  return request
    .post(url)
    .send(data)
    .then( response => {
      console.log('Got a response for server');
    })
    .catch( error => {
      console.log('Got an error:', error )
    })
};

module.exports = Req;
//
