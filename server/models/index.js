'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


  // global.db = {
  //   Sequelize: Sequelize,
  //   sequelize: sequelize,
  //   User:           sequelize.import(__dirname + '/user'), 
  //   History:        sequelize.import(__dirname + '/history'),
  //   Task:           sequelize.import(__dirname + '/task'), 
  //   Goal:           sequelize.import(__dirname + '/goal'), 
  //   Timestamp:      sequelize.import(__dirname + '/timestamp') 
  //   // add your other models here
  // };


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
