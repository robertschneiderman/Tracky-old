const User = require('../models').User;
const History = require('../models').History;
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const dh = require('../date_helpers');
const moment = require('moment');

// dev code
const week = dh.artificialWeek;

exports.find = function(req, res, next) {
  User.find({ where: {id: req.params.id}, 
    include: [
      {model: History, as: 'historys', where: {week}, include: [
        {model: Task, as: 'tasks', include: [
          {model: Goal, as: 'goals'},
          {model: Timestamp, as: 'timestamps'},
        ]}
      ]}
    ],
    order: [ [ { model: History, as: 'historys' }, 'createdAt', 'ASC' ] ]
  })
  .then((user) => {
    res.status(201).json(user);      
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.adjustWeek = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    user.devWeek = req.params.week;
    user.save({fields: ['devWeek']}).then(function() {
    
    });    
  });
};