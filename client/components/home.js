const m = require('mithril');
const request = require('superagent');
const Req = require('../models/requests');
// const Promise = require('bluebird');

//Main Request Example creator controller
const Home = module.exports;
Home.controller = function () {
  var ctrl = this;
  ctrl.url = m.prop(null);
  ctrl.response = m.prop('');

  ctrl.getReq = function (url) {
    m.startComputation();

    return new Promise(function(resolve, reject) {
      return resolve(Req.getRequest(url))
    })
    .then(function(response) {
      console.log('Response', response.text);
      ctrl.response(response.text);
      m.endComputation();
    });


  }

  ctrl.postReq = function(url, data) {
    m.startComputation();

    return new Promise(function(resolve, reject) {
      return resolve(Req.postRequest(url))
    })
    .then(function(response) {
      console.log('RESPONSE!', response);
      ctrl.response(response);
      m.endComputation();
    })

  }
}

//Main view composed of all sub views in desired order of appearance
Home.view = function (ctrl, options) {

    var view = m('div', [
      header(ctrl),
      field(ctrl),
      buttons(ctrl)
    ]);

  return view;
}


//A header to come before the steps:
const header = function() {
  return m('div', [
    m('h3', 'Welcome to the Campaign Manager'),
    m('p', 'To test the different server routes, simply enter in the route and click the button')
  ])
};

const field = function(ctrl) {
  return m('div', [
    m('a', 'http:/localhost:1337/'),
    m('input', {
      type: 'text',
      placeholder: "url",
      oninput: function(e) {
        e.preventDefault();
        ctrl.url(this.value); }
    }),
    m('br'),
    m('br'),
    m('a', 'Response from server: ' + ctrl.response())
  ])
};


const buttons = function(ctrl) {
  return m('div', [
    m('button', { type: 'submit', onclick: function(e){ e.preventDefault();  ctrl.getReq(ctrl.url()); }}, 'GET'),
    m('button', { type: 'submit', onclick: function(e){ e.preventDefault(); ctrl.postReq(ctrl.url()); }}, 'POST')
  ])

};
