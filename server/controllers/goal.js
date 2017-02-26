const Task = require('../models').Task;
const Goal = require('../models').Goal;
const dh = require('../date_helpers');
var _ = require('lodash');
var moment = require('moment');

const increment = (goals, incrementObj) => {
  let num = parseInt(incrementObj.increment);
  goals = goals.toObject();
  goals.forEach(goal => {
    goal.count = num;
  });
  return goals;
};

const firstDayOfWeek = () => {
  let result = moment().day(1).startOf('day');
  if (moment().day() === 0) result.subtract('days', 7);
  return result;
};

const hoursPassedSince = date => {
  return Math.floor(moment.duration(moment().unix() - date.unix(), 'seconds').asHours());
};

const lastDayOfMonth = () => {
  return moment().endOf('month').date();
};

const calculateMultipliers = goals => {
  goals.forEach(goal => {
    let fDoW = firstDayOfWeek();
    let fDoM = moment().date(1).startOf('day');
    // return Math.floor(moment.duration(moment().unix() - timestamp, 'seconds').asHours());
    if (goal.interval === 'weekly') {
      let hoursPassedInWeek = hoursPassedSince(fDoW);
      goal.multiplier = hoursPassedInWeek / 168;
    } else if (goal.interval === 'monthly') {
      let hoursPassedInMonth = hoursPassedSince(fDoM);
      goal.multiplier = hoursPassedInMonth / (lastDayOfMonth() * 24);
    }

  });
  return goals;
};

exports.create = function(req, res, next) {
  let goals = calculateMultipliers(req.body);

  Goal.bulkCreate(goals).then(() => {
    Goal.findAll().then(goals => {
      res.status(201).json(goals);
    });
  }).catch((e) => {
    res.status(401).send(e);
  });
};


exports.update = function(req, res, next) {
  let timestamp = req.body;
  let key = Object.keys(req.body)[0];
  let value = req.body[key];

  Goal.update({[key]: value}, {where: {id: req.params.id}, plain: true, returning: true }).then(goal => {
    res.status(201).json(goal[1]);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.increment = function(req, res, next) {
  let timestamp = req.body;
  let key = Object.keys(req.body)[0];
  let value = req.body[key];

  Task.findById(req.params.id).then(task => {
    task.getGoals().then(goals => {
      goals.forEach((goal, i) => {
        if (i === goals.length-1) {
          goal.increment('count', {by: req.body.amount}).then(() => {
            res.status(201).json(goals);
          });
        }
        goal.increment('count', {by: req.body.amount});  
      });
    });
  });
};