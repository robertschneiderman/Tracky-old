const User = require('../models').User;
const History = require('../models').History;
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const dh = require('../date_helpers');
const moment = require('moment');

exports.find = function(req, res, next) {
  User.find({ where: {id: req.params.id}, 
    include: [
      {model: History, as: 'historys', include: [
        {model: Task, as: 'tasks', include: [
          {model: Goal, as: 'goals'},
          {model: Timestamp, as: 'timestamps'},
        ]}
      ]}
    ] 
  })
  .then((user) => {
    res.status(201).json(user);      
  }).catch((e) => {
    res.status(401).send(e);
  });
};