const History = require('../models').History;
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
const dh = require('../date_helpers');
var _ = require('lodash');
var moment = require('moment');

// const week = dh.artificialWeek;
// const week = moment().get('week');


exports.get = function(req, res, next) {

  History.findAll({ 
    where: {week: req.params.week}, 
    include: [
      {model: Task, as: 'tasks', include: [
        {model: Goal, as: 'goals'},
        {model: Timestamp, as: 'timestamps'},
      ]}
    ],
    order: [ [ 'createdAt', 'ASC' ] ]
  })
  .then((historys) => {
    res.status(201).json(historys);      
  }).catch((e) => {
    res.status(401).send(e);
  }); 
};

exports.create = function(req, res, next) {
  let userId = req.body.id;
  let date = moment().startOf('day');
  let day = dh.adjustedDay(date.get('day'));
  let week = dh.adjustedWeek(date.get('day'), date.get('week'));
  let year = date.get('year');

  History.create({userId, date, day, week, year}).then(history => {
    res.status(201).json(history);
  }).catch((e) => {
    res.status(401).send(e);
  });   
};


