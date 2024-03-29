const User = require('../models').User;
const Task = require('../models').Task;
const Notification = require('../models').Notification;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const dh = require('../date_helpers');
const moment = require('moment');

// dev code
// const week = dh.artificialWeek;
exports.find = function(req, res, next) {
  
  User.find({ where: {id: parseInt(req.params.id)}, 
    include: [
      {model: Notification, as: 'notifications'},
      {model: Task, as: 'tasks', include: [
        {model: Goal, as: 'goals', required: false},
        {model: Timestamp, as: 'timestamps', required: false,
          where: { start: {$gt: dh.getStartOfWeek(), $lt: dh.getEndOfWeek()} }
        },
      ]}
    ],    
    // order: [ [ { model: Goal, as: 'goals', where: {week} }, 'createdAt', 'ASC' ] ]
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