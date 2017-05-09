const User = require('../models').User;
const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
var _ = require('lodash');
const dh = require('../date_helpers');
var moment = require('moment');


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

const addGoalTimeValues = (goals) => {
  let now = moment();
  let year = now.get('year');
  let week = dh.adjustedWeek();
  let day = dh.adjustedDay();
  goals.forEach(goal => {
    goal.year = year;
    goal.week = week;
    goal.day = day;
  });
};  

exports.create = function(req, res, next) {
  let {task, goals} = req.body;

  addGoalTimeValues(goals);

  task.goals = goals;
  task.timestamps = [];



  Task.create(task, {include: [ {model: Goal, as: 'goals'}, {model: Timestamp, as: 'timestamps'} ]})
  .then(task => {
      res.status(201).json(task);
  }).catch((e) => {
    res.status(401).send(e);
  });
};

exports.getTasks = function(req, res, next) {
  var token = req.header('x-auth');
  User.findByToken(token).then((user) => {
    if (user.buddy) {
      User.findOne({_id: user.buddy}).then(buddy => {
        res.json({user: user.tasks, buddy: buddy.tasks});
      });
    } else {
      res.json({user: user.tasks });      
    }
  }).catch((e) => {
    res.status(401).send();
  });
};

exports.updateTask = function(req, res, next) {

};