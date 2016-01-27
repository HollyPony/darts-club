#!/usr/bin/env node

var convict = require('convict');

// Schema
var conf = convict({
  env: {
    doc: 'Environnment de l\'application',
    format: ['prod', 'dev', 'inte', 'recette'],
    default: 'inte',
    env: 'NODE_ENV',
    arg: 'env'
  },
  logDebug: {
    doc: 'Activation du logger en debug',
    default: false,
    env: 'NODE_LOG_DEBUG'
  },
  buildNumber: {
    doc: 'Numéro de build de la version',
    default: 1,
    arg: 'buildNumber'
  }
});

var env = conf.get('env');
conf.loadFile([
  'build/config/application/' + env + '.json'
]);


// perform validation
conf.validate();

module.exports = conf;
