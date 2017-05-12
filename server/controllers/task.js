const Task = require('../models').Task;
const Goal = require('../models').Goal;
const Timestamp = require('../models').Timestamp;
var _ = require('lodash');
const dh = require('../date_helpers');
var moment = require('moment');


const firstDayOfWeek = () => {
  let result = dh.today().day(1).startOf('day');
  if (dh.today().day() === 0) result.subtract('days', 7);
  return result;
};

const hoursPassedSince = date => {
  return Math.floor(moment.duration(dh.today().unix() - date.unix(), 'seconds').asHours());
};

const lastDayOfMonth = () => {
  return dh.today().endOf('month').date();
};

const addMultipliers = goals => {
  goals.forEach(goal => {
    let fDoW = firstDayOfWeek();
    let fDoM = dh.today().date(1).startOf('day');
    
    if (goal.interval === 'weekly') {
      let hoursPassedInWeek = hoursPassedSince(fDoW);
      goal.multiplier = (168 - hoursPassedInWeek) / 168;
    } else if (goal.interval === 'monthly') {
      let hoursPassedInMonth = hoursPassedSince(fDoM);
      let hoursInMonth = (lastDayOfMonth() * 24);
      
      goal.multiplier = (hoursInMonth - hoursPassedInMonth) / hoursInMonth;
    }    

  });
  return goals;
};

const addGoalTimeValues = (goals) => {
  let now = dh.today();
  let year = now.get('year');
  let week = now.get('week');
  let day = now.get('day');
  goals.forEach(goal => {
    goal.year = year;
    goal.week = week;
    goal.day = day;
  });
};  

exports.create = function(req, res, next) {
  let {task, goals} = req.body;

  addGoalTimeValues(goals);

  task.goals = addMultipliers(goals);
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