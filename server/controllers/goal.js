const Task = require('../models').Task;
const Goal = require('../models').Goal;
const dh = require('../date_helpers');
var _ = require('lodash');
var moment = require('moment');
const db = require('../models');

const increment = (goals, incrementObj) => {
  let num = parseInt(incrementObj.increment);
  goals = goals.toObject();
  goals.forEach(goal => {
    goal.count = num;
  });
  return goals;
};

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

const calculateMultipliers = goals => {
  goals.forEach(goal => {
    let fDoW = firstDayOfWeek();
    let fDoM = dh.today().date(1).startOf('day');
    // return Math.floor(moment.duration(dh.today().unix() - timestamp, 'seconds').asHours());
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
    Goal.findAll({where: {taskId: req.body[0].taskId}}).then(goals => {
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

const getAmount = timestamp => {
  let timeElapsed = moment(timestamp.end).unix() - moment(timestamp.start).unix();
  if (!timestamp.start) return -1; 
  if (!timestamp.end) return 1; 
  return timeElapsed;
};

const selectGoalsToIncrement = (goals, timestamp) => {
  let now = dh.today();
  // return goals
  if (!dh.isSameWeek(timestamp.start, now)) goals = goals.filter(goal => goal.interval === 'montly');
  if (!dh.isSameDay(timestamp.start, now)) goals = goals.filter(goal => goal.interval !== 'daily');

  return goals;
};

exports.increment = function(req, res, next) {
  let timestamp = req.body.timestamp;
  // let key = Object.keys(req.body)[0];
  // let value = req.body[key];

  let amount = getAmount(timestamp);

  Goal.update({ count: db.sequelize.literal(`count + ${amount}`)}, { where: { taskId: timestamp.taskId }, returning: true })
  .then(goals => {
    res.status(201).json(goals[1]);
  });
};